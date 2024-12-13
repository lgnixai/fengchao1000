<?php

namespace addon\fcos\app\adminapi\controller;


use addon\fcos\app\service\core\CloudService as CommonAuth;
use core\base\BaseAdminController;
use addon\fcos\app\service\core\ConfigService;
use addon\fcos\app\service\core\YidaService;
class Config extends BaseAdminController
{
    /**
     * 接口数据
     */
    public function getConfig()
    {
        return success("FCOS_SUCCESS",(new ConfigService())->getConfig());
    }
    public function setConfig(){
       // (new CommonAuth())->auth();
        $data = $this->request->params([
            ['username', ''],
            ['privateKey', ''],
            ['floatWay', ''],
            ['floatAmount', ''],
            ['firstAmount','1.5'],
            ['secondAmount','0.5'],
            ['floatRate', ''],
            ['bindMobile', ''],
            ['amapKey', ''],
            ['autosend', '1'],
            ['cancelmin','0'],
            ['address_use','0'],
            ['tx_id',''],
            ['tx_secret',''],
            ["is_webhook",0],
            ["webhook_type",0],
            ["qwurl",''],
            ["fsurl",''],
            ["ddurl",''],
            ["min",''],
        ]);
        (new ConfigService())->setConfig($data);
        return success('FCOS_SUCCESS');
    }
    public function getBalance()
    {
           return success((new YidaService())->getBalance());
    }
}
