<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\fcos\app\adminapi\controller;


use addon\fcos\app\job\order\SendOrder;
use core\base\BaseAdminController;
use addon\fcos\app\service\core\ConfigService;
class Index extends BaseAdminController
{
    /**
     * 接口数据
     */
    public function index()
    {
        return success((new ConfigService())->getSiteId());
    }


}
