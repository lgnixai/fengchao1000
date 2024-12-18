<?php
return [
    [
        'menu_name' => '聚合快递',
        'menu_key' => 'fcos_site',
        'menu_short_name' => '快递',

        'menu_type' => '0',
        'icon' => 'fcos jhkd-kuaidi2',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '90',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '站点管理',
                'menu_key' => 'fcos_site_manage',
                'menu_short_name' => '站点',
                'menu_type' => '0',
                'icon' => 'nc-iconfont nc-icon-fenxiaoV6xx1',
                'api_url' => '',
                'router_path' => 'site_manage',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '站点管理',
                        'menu_key' => 'price_fee_list',
                        'menu_short_name' => '站点管理',
                        'menu_type' => '1',
                        'icon' => 'element OfficeBuilding',
                        'api_url' => 'fcos/site/price/get',
                        'router_path' => 'fcos/site/list',
                        'view_path' => 'site/list',
                        'methods' => 'get',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '1',
                        'children' => [
                            [
                                'menu_name' => '编辑价格',
                                'menu_key' => 'edit_price_fee',
                                'menu_short_name' => '编辑价格',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'fcos/site/site/<id>',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'put',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                        ],
                    ],

                    [
                        'menu_name' => '导入价格',
                        'menu_key' => 'site_ import_pirce',
                        'menu_short_name' => '导入价格',
                        'menu_type' => '1',
                        'icon' => 'element Money',
                        'api_url' => 'fcos/balance/balance',
                        'router_path' => 'fcos/site/import/index',
                        'view_path' => 'site/import/index',
                        'methods' => 'get',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '运费模版添加/编辑',
                        'menu_key' => 'fcos_config_delivery_shipping_template_add_edit',
                        'menu_short_name' => '运费模版添加/编辑',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'fcos/site/price/template_edit',
                        'view_path' => 'site/price/template_edit',
                        'methods' => 'get',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                        'children' => [
                            [
                                'menu_name' => '运费模版添加',
                                'menu_key' => 'fcos_config_delivery_shipping_template_add',
                                'menu_short_name' => '运费模版添加',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'fcos/site/price/template',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '0',
                            ],
                            [
                                'menu_name' => '运费模版编辑',
                                'menu_key' => 'fcos_config_delivery_shipping_template_edit',
                                'menu_short_name' => '运费模版编辑',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'fcos/site/price/template/<template_id>',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'put',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '0',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'menu_name' => '订单管理',
                'menu_key' => 'fcos_fcos_order_add_order_orderAdd',
                'menu_short_name' => '订单',
                'menu_type' => '0',
                'icon' => 'nc-iconfont nc-icon-liebiaoV6xx',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '日志列表',
                        'menu_key' => 'fcos_fcos_order_log_order_orderLog_list',
                        'menu_short_name' => '日志列表',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconwodedingdan',
                        'api_url' => 'fcos/orderlog/get/get',
                        'router_path' => 'fcos/order/orderlog',
                        'view_path' => 'order/orderlog',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '订单列表',
                        'menu_key' => 'fcos_fcos_order_order_order_list',
                        'menu_short_name' => '订单列表',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconwodedingdan',
                        'api_url' => 'fcos/order/get/get',
                        'router_path' => 'fcos/order/order',
                        'view_path' => 'order/order',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '补差订单',
                        'menu_key' => 'fcos_fcos_order_add_order_orderAdd_list',
                        'menu_short_name' => '补差订单',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconwodedingdan',
                        'api_url' => 'fcos/orderadd/get',
                        'router_path' => 'fcos/order/orderadd',
                        'view_path' => 'order/orderadd',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '订单日志添加',
                        'menu_key' => 'fcos_fcos_order_log_order_orderLog_add',
                        'menu_short_name' => '订单日志添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'fcos/orderlog/post',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列添加',
                        'menu_key' => 'fcos_fcos_order_order_order_add',
                        'menu_short_name' => '订单列添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'fcos/order/post/post',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列添加',
                        'menu_key' => 'fcos_fcos_order_add_order_orderAdd_add',
                        'menu_short_name' => '订单列添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'fcos/orderadd',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列编辑',
                        'menu_key' => 'fcos_fcos_order_add_order_orderAdd_edit',
                        'menu_short_name' => '订单列编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'fcos/orderadd/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单日志编辑',
                        'menu_key' => 'fcos_fcos_order_log_order_orderLog_edit',
                        'menu_short_name' => '订单日志编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'fcos/orderlog/<id>/put',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列编辑',
                        'menu_key' => 'fcos_fcos_order_order_order_edit',
                        'menu_short_name' => '订单列编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'fcos/order/<id>/put/put',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列删除',
                        'menu_key' => 'fcos_fcos_order_order_order_delete',
                        'menu_short_name' => '订单列删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'fcos/order/<id>/delete/delete',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列删除',
                        'menu_key' => 'fcos_fcos_order_add_order_orderAdd_delete',
                        'menu_short_name' => '订单列删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'fcos/orderadd/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单日志删除',
                        'menu_key' => 'fcos_fcos_order_log_order_orderLog_delete',
                        'menu_short_name' => '订单日志删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'fcos/orderlog/<id>/delete',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ],
            ],
            [
                'menu_name' => '常用配置',
                'menu_key' => 'fcos_base_config',
                'menu_short_name' => '配置',
                'menu_type' => '0',
                'icon' => 'nc-iconfont nc-icon-shezhi-1V6xx',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '快递配置',
                        'menu_key' => 'fcos_delivery_config',
                        'menu_short_name' => '快递',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconjichushezhi',
                        'api_url' => '',
                        'router_path' => 'fcos/delivery/config',
                        'view_path' => 'delivery_config',
                        'methods' => '',
                        'sort' => '100',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '基础配置',
                        'menu_key' => 'fcos_config',
                        'menu_short_name' => '基础配置',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconjichushezhi',
                        'api_url' => '',
                        'router_path' => 'fcos/baseconfig/config',
                        'view_path' => 'config',
                        'methods' => '',
                        'sort' => '100',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '快递品牌',
                        'menu_key' => 'fcos_brand_manage',
                        'menu_short_name' => '快递品牌',
                        'menu_type' => '1',
                        'icon' => 'element Lock',
                        'api_url' => 'site/user',
                        'router_path' => 'fcos/baseconfig/brand',
                        'view_path' => 'brand',
                        'methods' => 'get',
                        'sort' => '100',
                        'status' => '1',
                        'is_show' => '1',
                        'children' => [
                            [
                                'menu_name' => '添加品牌',
                                'menu_key' => 'fcos_add_brand',
                                'menu_short_name' => '添加品牌',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'fcos/brand',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'post',
                                'sort' => '100',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '编辑品牌',
                                'menu_key' => 'fcos_edit_brand',
                                'menu_short_name' => '编辑品牌',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'fcos/brand/<id>',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'put',
                                'sort' => '100',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '删除品牌',
                                'menu_key' => ' fcos_delete_brand',
                                'menu_short_name' => '删除品牌',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'fcos/brand/<id>',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'delete',
                                'sort' => '100',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '快递品牌',
                                'menu_key' => 'fcos_brand_detail',
                                'menu_short_name' => '快递品牌',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'fcos/brand/<id>',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'get',
                                'sort' => '1',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                        ],
                    ],

                ],
            ],




            [
                'menu_name' => '通知列表',
                'menu_key' => 'fcos_notice',
                'menu_short_name' => '通知',
                'menu_type' => '1',
                'icon' => 'iconfont-iconwangzhan1',
                'api_url' => '',
                'router_path' => 'fcos/notice',
                'view_path' => 'notice',
                'methods' => '',
                'sort' => '0',
                'status' => '1',
                'is_show' => '0',
            ],

            [
                'menu_name' => '会员管理',
                'menu_key' => 'member',
                'menu_short_name' => '会员',

                'menu_type' => '0',
                'icon' => 'iconfont iconjiaoseyonghu',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '0',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '会员列表',
                        'menu_key' => 'member_list',
                        'menu_short_name' => '会员列表',
                        'menu_type' => '1',
                        'icon' => 'iconfont iconhuiyuanliebiao',
                        'api_url' => 'member/member',
                        'router_path' => 'member/member',
                        'view_path' => 'member/member',
                        'methods' => 'get',
                        'sort' => '100',
                        'status' => '1',
                        'is_show' => '1',
                        'children' => [
                            [
                                'menu_name' => '编辑会员',
                                'menu_key' => 'member_update',
                                'menu_short_name' => '编辑',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'member/modify/<member_id>/<field>',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'put',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '添加会员',
                                'menu_key' => 'member_add',
                                'menu_short_name' => '添加',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'member/member',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '会员导出',
                                'menu_key' => 'member_export',
                                'menu_short_name' => '会员导出',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'member/member/export',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'get',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                        ],
                    ],
                    [
                        'menu_name' => '会员详情',
                        'menu_key' => 'member_info',
                        'menu_short_name' => '会员详情',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => 'member/member/<id>',
                        'router_path' => 'member/detail',
                        'view_path' => 'member/member_detail',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '0',
                        'children' => [
                            [
                                'menu_name' => '调整会员积分',
                                'menu_key' => 'adjust_point',
                                'menu_short_name' => '调整会员积分',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'member/account/point',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '调整会员余额',
                                'menu_key' => 'adjust_balance',
                                'menu_short_name' => '调整会员余额',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'member/account/balance',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ]
                        ],
                    ],

                    [
                        'menu_name' => '会员余额',
                        'menu_key' => 'member_balance',
                        'menu_short_name' => '会员余额',
                        'menu_type' => '1',
                        'icon' => 'element Money',
                        'api_url' => 'member/account/balance',
                        'router_path' => 'member/balance',
                        'view_path' => 'member/balance',
                        'methods' => 'get',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '1',
                    ],

                ]
            ],
            [
                'menu_name' => '系统设置',
                'menu_key' => 'setting',
                'menu_short_name' => '设置',

                'menu_type' => '0',
                'icon' => 'element Setting',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '83',
                'status' => '1',
                'is_show' => '1',
                'children' => [

                    [
                        'menu_name' => '支付管理',
                        'menu_key' => 'setting_pay',
                        'menu_short_name' => '支付管理',
                        'menu_type' => '1',
                        'icon' => 'element Wallet',
                        'api_url' => '',
                        'router_path' => 'setting/pay',
                        'view_path' => '',
                        'methods' => 'get',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '1',
                        'children' => [
                            [
                                'menu_name' => '支付设置',
                                'menu_key' => 'setting_pay_channel',
                                'menu_short_name' => '支付设置',
                                'menu_type' => '1',
                                'icon' => '',
                                'api_url' => 'pay/channel/lists',
                                'router_path' => 'setting/pay/channel',
                                'view_path' => 'setting/pay',
                                'methods' => 'get',
                                'sort' => '100',
                                'status' => '1',
                                'is_show' => '1',
                                'children' => [
                                    [
                                        'menu_name' => '设置',
                                        'menu_key' => 'setting_pay_channel_set',
                                        'menu_short_name' => '设置',
                                        'menu_type' => '2',
                                        'icon' => '',
                                        'api_url' => 'pay/channel/set/<channel>/<type>',
                                        'router_path' => '',
                                        'view_path' => '',
                                        'methods' => 'post',
                                        'sort' => '100',
                                        'status' => '1',
                                        'is_show' => '1',
                                    ],
                                ],
                            ],

                        ],
                    ],


                ],
            ],
        ],
    ],

];