<?php

return [
    'FCOS_DIY_LINK' => [
        'key' => 'fcos_link',
        'addon_title' => '聚合快递',
        'title' => '聚合快递',
        'child_list' => [
            [
                'name' => 'FCOS_INDEX',
                'title' =>'快递首页',
                'url' => '/addon/fcos/pages/index',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'FCOS_MEMBER_INDEX',
                'title' =>'个人中心',
                'url' => '/addon/fcos/pages/member',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'FCOS_FENXIAO_INDEX',
                'title' =>'分销中心',
                'url' => '/addon/fcos/pages/fenxiao/index',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'FCOS_ORDERSUBMIT',
                'title' =>'快递下单',
                'url' => '/addon/fcos/pages/ordersubmit',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'FCOS_HELP',
                'title' => '帮助中心',
                'url' => '/addon/fcos/pages/help',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'FCOS_YESGOODS',
                'title' => '违禁查询',
                'url' => '/addon/fcos/pages/agreement?type=jhkdyesgoods',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'FCOS_ORDERLIST',
                'title' =>'订单列表',
                'url' => '/addon/fcos/pages/orderlist',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'FCOS_ORDERADDLIST',
                'title' =>'补差价',
                'url' => '/addon/fcos/pages/orderaddlist',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'FCOS_ORDERKD',
                'title' =>'寄快递',
                'url' => '/addon/fcos/pages/ordersubmit?type=kd',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'FCOS_ORDERKY',
                'title' =>'寄重货',
                'url' => '/addon/fcos/pages/ordersubmit?type=ky',
                'is_share' => 1,
                'action' => ''
            ],
        ]
    ],
];