<?php

namespace addon\fcos\app\api\controller\express;

use addon\fcos\app\service\fcapi\ExpressService;
use core\base\BaseApiController;
use think\facade\Log;
use think\Response;


class Express extends BaseApiController
{
    //快递鸟接口
    public function  order()
    {

        $data = $this->request->params([
            ["api_name", ""],
            ["api_id", ""],
            ["api_key", ""],
            ["request_data", ""],
            ["api_secret", ""],
            ["RequestData", ""],
            ["RequestType", ""],
            ["EBusinessID", ""],
            ["ApiKey", ""],
            ["callback_url", ""],
        ]);


        $requestData = $data['RequestData'];

        $datas = array(
            //'EBusinessID' => EBusinessID,
            'RequestType' => $data['RequestType'],
            'RequestData' => ($requestData),
            //'DataType' => '2',
            'SiteId'=>$this->request->siteId(),
        );

        //订单先查查余额
//        if ($data['RequestType'] == "1801") {
//            $res=(new BalanceService())->getInfo();
//            if($res["balance"]<100){
//                $result=[
//                    "Reason"=>"余额不能小于100元，请充值",
//                    "Success"=>false,
//                ];
//                return success($msg = 'SUCCESS', json_encode($result));
//
//            }
//
//
//        }



        $result = (new ExpressService())->HandleOrder($datas);
        return success($msg = 'SUCCESS', json_encode($result));

        exit;
        if ($result["Success"] == false) {
            return success($msg = 'FAIL', json_encode($result),0,400);


        }

        Log::write('快递鸟接口' . json_encode($result));


        $event_data=[];
        $event_data["request"]=$requestData;
        $event_data["request_type"]=$data['RequestType'];
        $event_data["site_id"]=$this->request->siteId();
        $event_data["response"]=$result;

        //添加日志
        OrderEventService::createOrderLog($event_data);

        //订单创建
        if ($data['RequestType'] == "1801") {
            event('AfterOrderCreate', $event_data);
        }

        if ($data['RequestType'] == "1815") {
            $result=(new OrderPrice())->get_sell_price($event_data);
        }

        return success($msg = 'SUCCESS', json_encode($result));

    }
    /**
     * 订单回调
     * @return Response
     */
    public function notify()
    {

         $data = $this->request->params([
             ["RequestData",''],
             ["DataSign",''],
             ["RequestType",''],
         ]);

        Log::write('订单回调' . json_encode($data,JSON_UNESCAPED_UNICODE));


        $data=json_encode($data,JSON_UNESCAPED_UNICODE);
        $res=[];
        $res["EBusinessID"] = env("fengchao.KDN_ID");;
        $res["Success"] = true;
        $res["Reason"] = "成功";
        $res["UpdateTime"] = date('Y-m-d H:i:s');


        event('ListenNotifyAfter',json_decode($data,true));

        //var_dump($res);
        return  json_encode($res);
    }


}
