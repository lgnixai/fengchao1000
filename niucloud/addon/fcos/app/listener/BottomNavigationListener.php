<?php

namespace addon\fcos\app\listener;

use app\service\core\addon\CoreAddonService;
use app\service\core\site\CoreSiteService;

/**
 * 底部导航
 */
class BottomNavigationListener
{
    /**
     * @param array $params
     * @return array|void
     */
    public function handle($params = [])
    {
        $key = 'fcos';

        $site_addon = (new CoreSiteService())->getAddonKeysBySiteId(request()->siteId());
        if (!in_array($key, $site_addon)) return;

        if (!empty($params)&& !empty($params['key']) && $params['key'] != $key) return;

        $core_addon_service = new CoreAddonService();
        $addon_info = $core_addon_service->getAddonConfig($key);

        return [
            'key' => $key,
            'info' => $addon_info,
            'value' => [
                "backgroundColor" => "#ffffff",
                "textColor" => "#333333",
                "textHoverColor" => "#4541c7",
                "type" => 1,
                "list" => [
                    [
                        "text" => "首页",
                        "link" => [
                            "parent" =>"FCOS_DIY_LINK",
                            "name" =>"FCOS_DIY_INDEX",
                            "title" =>"快递首页",
                            "url" =>"/addon/fcos/pages/index",
                            "action" =>"decorate"
                        ],
                        "iconPath" => "addon/fcos/diy/tabbar/index.png",
                        "iconSelectPath" => "addon/fcos/diy/tabbar/index-select.png"
                    ],
                    [
                        "text" => "订单",
                        "link" => [
                            "parent" => "FCOS_LINK",
                            "name" => "FCOS_ORDERLIST",
                            "title" => "订单列表",
                            "url" => "/addon/fcos/pages/orderlist",
                            "action" => ""
                        ],
                        "iconSelectPath" => "addon/fcos/diy/tabbar/order-select.png",
                        "iconPath" => "addon/fcos/diy/tabbar/order.png"
                    ],
                    [
                        "text" => "帮助",
                        "link" => [
                            "parent" => "FCOS_LINK",
                            "name" => "FCOS_HELP",
                            "title" => "帮助中心",
                            "url" => "/addon/fcos/pages/help",
                            "action" => ""
                        ],
                        "iconSelectPath" => "addon/fcos/diy/tabbar/help-select.png",
                        "iconPath" => "addon/fcos/diy/tabbar/help.png"
                    ],
                    [
                        "text" => "个人",
                        "link" => [
                            "parent" => "MEMBER_LINK",
                            "name" => "MEMBER_CENTER",
                            "title" => "个人中心",
                            "url" => "/addon/fcos/pages/member",
                            "action" => "decorate"
                        ],
                        "iconSelectPath" => "addon/fcos/diy/tabbar/my-select.png",
                        "iconPath" => "addon/fcos/diy/tabbar/my.png"
                    ]
                ]
            ]
        ];


    }
}
