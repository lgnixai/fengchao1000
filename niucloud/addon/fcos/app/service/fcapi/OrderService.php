<?php

namespace addon\fcos\app\service\fcapi;

use addon\fcos\app\dict\order\JhkdOrderAddDict;
use addon\fcos\app\dict\order\JhkdOrderDict;
use addon\fcos\app\job\notice\Webhook;
use addon\fcos\app\model\order\OrderAdd;
use addon\fcos\app\model\orderdelivery\OrderDelivery;
use addon\fcos\app\model\OrderDeliveryReal;
use addon\fcos\app\model\TkjhkdBrand;
use addon\fcos\app\model\tkjhkdorder\Tkjhkdorder;
use addon\fcos\app\service\core\CommonService;
use addon\fcos\app\service\core\OrderLogService;
use addon\fcos\app\service\core\YidaService;
use app\dict\pay\PayDict;
use app\model\pay\Pay;
use app\model\pay\Refund;
use app\service\core\notice\NoticeService;
use app\service\core\pay\CorePayService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseApiService;
use core\exception\CommonException;
use core\util\Snowflake;
use Exception;
use think\facade\Cache;
use think\facade\Db;
use think\facade\Log;

/**
 * 聚合快递订单服务层
 * Class OrderService
 * @package addon\fcos\service\core\order
 */
class OrderService extends FcBaseService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new TkjhkdOrder();
    }
    /**
     * 快递预下单 1815
     * @param $params
     * @return array
     * @throws Exception
     */
    public function preOrder($params)
    {
        $dataInfo=(new LinePrice())->getLinePrice($params);
        usort($dataInfo, function ($a, $b) {
            return $a['totalFee'] <=> $b['totalFee'];
        });

        return $dataInfo;
    }

    /**
     * @param $params
     * 创建系统订单
     */
    public
    function createOrder($params)
    {



        Db::startTrans();
        try {


            $totalFee=(new LinePrice())->getOrderLinePrice($params);

            $orderData = [
                "site_id" => $this->site_id,
                "member_id" => $this->member_id,
                'ip' => request()->ip() ?? '',
                "order_from" => "H5",
                "order_id" => $this->create_no("FC"),
                "order_money" => $totalFee,
                "remark" => ""
            ];

            $deliveryData = [
                //"start_address" => $params["Sender"]["ProvinceName"].$params["Sender"]["CityName"].$params["Sender"]["ExpAreaName"].$params["Sender"]["Address"],
                //"end_address" =>  $params["Receiver"]["ProvinceName"].$params["Receiver"]["CityName"].$params["Receiver"]["ExpAreaName"].$params["Receiver"]["Address"],
                 "start_address" => json_encode($params["Sender"], JSON_UNESCAPED_UNICODE),
                "end_address" => json_encode($params["Receiver"], JSON_UNESCAPED_UNICODE),

                "member_id" => $this->member_id,
                "weight" => $params['Weight'],
                "long" => 1,
                "width" => 1,
                "height" => 1,
                "goods" => $params['Commodity'][0]["GoodsName"],
                "package_count" => $params['Commodity'][0]["GoodsQuantity"],
                "bj_price" => $params['Commodity'][0]["GoodsPrice"],
                "order_id" => $orderData['order_id'],
                "delivery_status" => 1,
                "delivery_type" => $params['ShipperCode'],
                "delivery_business" => $params['ShipperType'],
                "online_pay" => "Y",
                "customer_type" => "",
                "pay_method" => 10,
                "remark" => "",
                "channel_id" => "",
                "price_rule" => "",
                "original_rule" => "",
            ];

            (new OrderDelivery())->create($deliveryData);

            $info = $this->model->create($orderData);


//            Log::write("订单发货事件---".$order_id.'---'.date("Y-m-d H:i:s").'------');
//            (new \addon\fcos\app\service\core\OrderService())->sendOrder($order_id);
//
            //添加订单支付表
            (new CorePayService())->create($orderData['site_id'], PayDict::MEMBER, $orderData['member_id'], $orderData['order_money'], JhkdOrderDict::getOrderType()['type'], $info['id'], "快递下单付款");
            //同步创建计费
            (new OrderDeliveryReal())->create([
                'order_id' => $info['order_id'],
                "weight" => $params['Weight'],
            ]);
            (new OrderLogService())->writeOrderLog(
                $orderData['site_id'],
                $orderData['order_id'],
                JhkdOrderDict::WAIT_PAY,
                '订单创建',
                PayDict::MEMBER,
                $this->member_id
            );
            Db::commit();
            return [
                'trade_type' => 'jhkdOrderPay',//type
                'trade_id' => $info['id']//id
            ];
        } catch (Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

}