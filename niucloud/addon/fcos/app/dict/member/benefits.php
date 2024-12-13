<?php

return [
    'fcos_fenxiao' => [
        'key' => 'fcos_fenxiao',
        'name' => '分销', // 权益名称
        'desc' => '聚合快递分销', // 权益说明
        'component' => '/src/addon/fcos/views/member/components/benefits-jhkd-fenxiao.vue',
        "content" => [
            'admin' => function($site_id, $config) {
                return "聚合快递分销特权";
            },
            'member_level' => function($site_id, $config) {
                return [
                    'title' => "快递分销",
                    'desc' => '分销特权',
                    'icon' => '/addon/fcos/rule/fenxiao.png'
                ];
            }
        ]
    ]
];
