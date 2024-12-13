<?php
namespace addon\fcos\app\listener;

use app\service\core\site\CoreSiteService;

/**
 * 手机端首页加载事件
 */
class WapIndexListener
{
    public function handle()
    {
        $site_addon = (new CoreSiteService())->getAddonKeysBySiteId(request()->siteId());
        if (!in_array('fcos', $site_addon)) return;

        return [
            [
                'key' => 'fcos',
                "title" => '聚合快递首页',
                'desc' => '低价寄快递，上门取件',
                "url" => "/addon/fcos/pages/index",
                'icon'=>'addon/fcos/icon.png'
            ],
        ];
    }
}
