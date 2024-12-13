<?php

namespace addon\fcos\app\api\controller;

use addon\fcos\app\service\core\KdniaoNoticeService;
use addon\fcos\app\service\core\TranceService;
use addon\fcos\app\service\core\XindaNoticeService;
use addon\fcos\app\service\core\YidaNoticeService;
use addon\fcos\app\service\core\YidaService;
use addon\fcos\app\service\core\YunyangNoticeService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseController;
use addon\fcos\app\service\core\OrderService;
use addon\fcos\app\dict\order\JhkdOrderDict;
use addon\fcos\app\service\api\OrderService as ApiOrderService;
use think\Response;


class Order extends BaseController
{
    public function checkAddPay()
    {
        return success((new OrderService())->checkAddPay());
    }
    /**
     *生成系统订单
     */
    public function createOrder()
    {
        $data = $this->request->params([
            ["startAddress", ''],
            ["endAddress", ''],
            ["delivery_info", []],
            ["weight", ''],
            ["vloumLong", ''],
            ["vloumWidth", ''],
            ["vloumHeight", ''],
            ["goods", ''],
            ["packageCount", ''],
            ["showPrice", ''],
            ["guaranteeValueAmount", ''],
            ["customerType", ''],
            ["start_time", ''],
            ["end_time", ''],
            ["remark", ''],
            ["pay_method", 10],
            ["key", ''],
            ["delivery_index", ''],
            ["price_rule", []],
            ["original_rule", []],
        ]);
        $data['startAddress'] = json_encode($data['startAddress']);
        $data['endAddress'] = json_encode($data['endAddress']);
        $data['price_rule'] = json_encode($data['price_rule']);
        $data['original_rule'] = json_encode($data['original_rule']);
        return success((new OrderService())->createOrder($data));
    }

    /**
     *获取订单状态数组
     */
    public function getOrderStatus()
    {
        return success(JhkdOrderDict::getStatus());
    }

    /**
     * 获取订单列表
     */
    public function getOrderList()
    {
        $data = $this->request->params([
            ['order_status', ''],
        ]);
        return success((new ApiOrderService())->getPage($data));
    }

    /**
     * 获取订单信息
     */
    public function getOrderInfo(int $id)
    {
        return success((new ApiOrderService())->getInfo($id));
    }

    /**
     * 申请退款
     */
    public function applyRefund()
    {
        $data = $this->request->params([
            ["id", ""],
            ["close_reason", "申请退款"]
        ]);
        return success('申请成功', (new ApiOrderService())->applyRefundCheck($data));
    }

    /**
     * 删除订单
     */
    public function deleteOrder(int $id)
    {
        return success('删除成功', (new ApiOrderService())->del($id));
    }

    /**
     * 关闭订单
     */
    public function closeOrder(int $id)
    {
        return success('关闭成功', (new ApiOrderService())->close($id));
    }

    /**
     *预下单
     * @return Response
     */
    public function preOrder()
    {
        $data = $this->request->params([
            ["startAddress", ''],
            ["endAddress", ''],
            ["delivery_info", []],
            ["weight", ''],
            ["vloumLong", ''],
            ["vloumWidth", ''],
            ["vloumHeight", ''],
            ["goods", ''],
            ["packageCount", ''],
            ["showPrice", ''],
            ["guaranteeValueAmount", ''],
            ["customerType", ''],
            ["start_time", ''],
            ["end_time", ''],
            ["remark", ''],
            ["pay_method", 10],
            ["key", ''],
            ["delivery_index", '']
        ]);
        return success((new OrderService())->preOrder($data));
    }


    /**
     * 易达回调
     */
    public function yidaNotice()
    {
        $data = $this->request->params([
            ['orderNo', ''],
            ['pushType', ''],
            ['contextObj', []],
            ['deliveryId', ''],
            ['thirdNo', ''],
        ]);
        (new YidaNoticeService())->notice($data);
        return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
    }
    public function getConfig($site_id)
    {


        $info = (new CoreConfigService())->getConfig($site_id, 'JHKD_DELIVERY')['value'] ?? [];
        if (empty($info)) throw new Exception('DELIVERY_NOT_OPEN');
        $res = $info['kdniao'] ?? '';

        return $res["appid"];
    }
    /**
     * 快递鸟回调
     */
    public function kdniaoNotice()
    {

        $data = $this->request->params([
            ["RequestData",''],
            ["DataSign",''],
            ["RequestType",''],
        ]);

        Log::write('订单回调' . json_encode($data,JSON_UNESCAPED_UNICODE));
        $data=json_encode($data,JSON_UNESCAPED_UNICODE);

        $params = [
            'orderNo' => $data['shopbill'],
            'pushType' => $data['typeCode'],
            'deliveryId' => $data['waybill'],
            'contextObj' => [
                "courierName" => $data['courierName'] ?? '',
                "courierPhone" => $data['courierPhone'] ?? '',
                "realWeight" => $data['calWeight'] ?? '',
                "calcFeeWeight" => $data['calWeight'] ?? '',
                "packageCount" => 1,
                "feeBlockList" => [
                    [
                        "fee" => $data['totalFreight'],
                        "type" => '0',
                        "name" => '重量费用'
                    ],
                    [
                        "fee" => $data['freightHaocai'],
                        "type" => '1',
                        "name" => '耗材费'
                    ],
                    [
                        "fee" => $data['freightInsured'],
                        "type" => '2',
                        "name" => '保价费用'
                    ],
                ],
                "businessTypeNew"=>'',
                "deliveryIdNew"=>''

            ],
        ];
        (new KdniaoNoticeService())->notice($params);

        $res=[];
        $res["EBusinessID"] = $this->getConfig("100000");
        $res["Success"] = true;
        $res["Reason"] = "成功";
        $res["UpdateTime"] = date('Y-m-d H:i:s');

        return Response::create($res, 'json', 200);
    }

    /**
     * 云洋回调
     */
    public function yunyangNotice()
    {
        $data = $this->request->params([
            ['shopbill', ''], //运单的订单号
            ['typeCode', ''],//状态码  1、待揽收 2、运送中 3、已签收 4、退回 5、取消
            ['waybill', ''],//运单号
            ['calWeight', ''],//计费重量
            ['totalFreight', ''],//运单总扣款
            ['type', ''],//运单状态
            ['comments', ''],//快递员信息
            ['courierPhone', ''],//揽件电话
            ['courierName', ''],//揽件员
            ['volume',''],//实际体积
            ['freightHaocai',0],//耗材
            ['freightInsured',0],//保价费
        ]);
        $params = [
            'orderNo' => $data['shopbill'],
            'pushType' => $data['typeCode'],
            'deliveryId' => $data['waybill'],
            'contextObj' => [
                "courierName" => $data['courierName'] ?? '',
                "courierPhone" => $data['courierPhone'] ?? '',
                "realWeight" => $data['calWeight'] ?? '',
                "calcFeeWeight" => $data['calWeight'] ?? '',
                "packageCount" => 1,
                "feeBlockList" => [
                    [
                        "fee" => $data['totalFreight'],
                        "type" => '0',
                        "name" => '重量费用'
                    ],
                    [
                        "fee" => $data['freightHaocai'],
                        "type" => '1',
                        "name" => '耗材费'
                    ],
                    [
                        "fee" => $data['freightInsured'],
                        "type" => '2',
                        "name" => '保价费用'
                    ],
                ],
                "businessTypeNew"=>'',
                "deliveryIdNew"=>''

            ],


        ];
        (new YunyangNoticeService())->notice($params);
        return Response::create(['message' => '推送成功', 'code' => 1], 'json', 200);
    }
    /**
     * 辛达回调
     */
    public function xindaNotice()
    {
        $data = $this->request->params([
            ['xin_dabill', ''], //辛达的订单号
            ['state', ''],//状态码  1、待揽收 2、运送中 3、已签收 4、取消 5、退回
            ['waybill', ''],//运单号
            ['cal_weight', ''],//计费重量
            ['total_freight', ''],//运单总扣款
            ['expressman', ''],//揽收信息
            ['courierPhone', ''],//揽件电话
            ['courierName', ''],//揽件员
            ['feeOver',''],//扣费状态
            ['consumables_money',''],//包装费
            ['change_bill_freight','']
        ]);
        $params = [
            'orderNo' => $data['xin_dabill'],
            'pushType' => $data['state'],
            'deliveryId' => $data['waybill'],
            'contextObj' => [
                "courierName" => $data['expressman']['courierName'] ?? '',
                "courierPhone" => $data['expressman']['courierPhone'] ?? '',
                "realWeight" => $data['cal_weight'] ?? '',
                "calcFeeWeight" => $data['cal_weight'] ?? '',
                "packageCount" => 1,
                "feeBlockList" => [
                    [
                        "fee" => $data['total_freight'],
                        "type" => '0',
                        "name" => '总费用'
                    ],
                    [
                        "fee" => $data['consumables_money'],
                        "type" => '1',
                        "name" => '耗材费'
                    ],
                ],
                "businessTypeNew"=>'',
                "deliveryIdNew"=>''
            ],

        ];
        (new XindaNoticeService())->notice($params);
        return Response::create(['msg' => '推送成功', 'code' => 0,'data'=>''], 'json', 200);
    }
    /**
     * 物流信息查询
     */
    public function deliveryInfo($deliveryid)
    {
        return success((new TranceService())->deliveryTrance(['delivery_id' => $deliveryid]));
    }
}