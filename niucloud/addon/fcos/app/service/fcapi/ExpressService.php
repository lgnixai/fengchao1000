<?php

namespace addon\fcos\app\service\fcapi;
use think\Response;

use addon\fcos\app\model\tkjhkdorder\Tkjhkdorder;

use addon\fcos\app\service\api\AddressService;
use core\exception\CommonException;


/**
 * 聚合快递订单服务层
 * Class OrderService
 * @package addon\fcos\service\core\order
 */
class ExpressService extends FcBaseService
{

    public function __construct()
    {
        parent::__construct();
     }

    public function HandleOrder($params){
//        echo $this->member_id;
//        echo $this->site_id;

        $RequestData = json_decode($params['RequestData'], true);
        //创建订单
        if ($params['RequestType'] == 1801) {

            (new OrderService())->createOrder($RequestData);
        }
        //运费预估寻价
        if ($params['RequestType'] == 1815) {

           $result= (new OrderService())->preOrder($RequestData);
           $res=[];
           $res["Data"]=$result;
           $res["ResultCode"]="100";
           $res["Reason"]="查询成功！";
           return $res;
           //return Response::create([ 'data' => json_encode($res, JSON_UNESCAPED_UNICODE), 'msg' => "", 'code' => 100 ], 'json', 200);


        }

    }
}