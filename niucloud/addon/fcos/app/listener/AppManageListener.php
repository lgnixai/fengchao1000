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


namespace addon\fcos\app\listener;

/**
 * 应用管理
 * Class AppManage
 * @package app\listener\fcos
 */
class AppManageListener
{
    /**
     * 应用管理
     * @param $data
     */
    public function handle()
    {
        return [
            "category" => [
                //插件如果要单独分类展示，需要专门定义
                [
                    "key" => "fcos_category",
                    "name" => "第三方应用",
                ],
            ],
            [
                "addon" => "fcos",
                "title" => "聚合快递",
                "category" => "fcos_category",  //设置插件对应展示分类，默认basic
                "desc" => "聚合快递应用展示",
                "icon" => addon_resource("fcos", "icon.png"),  //图标
                "cover" => "",  //封面
                "url" => "/fcos"
            ],
        ];
    }
}