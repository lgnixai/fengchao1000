<?php

namespace addon\fcos\app\adminapi\controller\site;

use addon\fcos\app\dict\delivery\DeliveryDict;
use addon\fcos\app\service\admin\DeliveryService;
use core\base\BaseAdminController;
use core\exception\AdminException;
use think\Response;

class Delivery extends BaseAdminController
{
    /**
     * 配置列表
     */
    public function all()
    {
        $res = (new DeliveryService())->getList();
        return success($res);
    }

}
