<?php


namespace addon\fcos\app\api\controller\test;

 use core\base\BaseApiController;



class Dev extends BaseApiController
{

    //快递鸟接口
    public function  domain()
    {

       // $res = $model->save($data);
        // echo $url;
        $result=[
            "Reason"=>"余额不能小于100元，请充值",
            "Success"=>false,
        ];
        return success($msg = 'SUCCESS', json_encode($result));

    }


}
