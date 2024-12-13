<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\fcos\app\adminapi\controller\pay;

use addon\fcos\app\service\admin\shop\OrderService;
use addon\fcos\app\service\admin\shop\OrderDeliveryService;
use app\service\api\pay\PayService;
use app\service\core\pay\CorePayService;
use core\base\BaseAdminController;
use core\exception\CommonException;
use think\facade\Cache;
use think\Response;

class Pay extends BaseAdminController
{

    public $core_pay_service;
    public function __construct()
    {

        $this->core_pay_service = new CorePayService();
    }

    public function pay()
    {


        //$request->siteId($auth["site_id"]);




        $data["trade_id"]=3;
        $data["trade_type"]="jhkdOrderPay";
        $data["type"]="balancepay";
        $site_id=100000;
        return success('SUCCESS',$data);
        $a= $this->core_pay_service->pay($site_id, $data["trade_type"],  $data["trade_id"],
            "balancepay", "pc", "", "", "", "", "");
        var_dump($a);
        exit;
       // return success('SUCCESS',(new PayService())->pay($data['type'], $data['trade_type'], $data['trade_id'], $data['return_url'], $data['quit_url'], $data['buyer_id'], $data['voucher'], $data['openid']));
    }

}
