<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
			// *********************************** 聚合快递 ***********************************
			{
				"path": "fcos/pages/address/address",
				"style": {
					"navigationBarTitleText": "地址列表"
				},
				"needLogin": true
			},
			{
				"path": "fcos/pages/address/address_edit",
				"style": {
					"navigationBarTitleText": "快递地址"
				},
				"needLogin": true
			},
			{
				"path": "fcos/pages/address/location_address_edit",
				"style": {
					"navigationBarTitleText": "同城地址"
				},
				"needLogin": true
			},
			{
				"path": "fcos/pages/agreement",
				"style": {
					"navigationBarTitleText": "协议详情"
				},
				"needLogin": true
			},
			{
				"path": "fcos/pages/help",
				"style": {
					"navigationBarTitleText": "帮助中心"
				},
				"needLogin": false
			},
			{
				"path": "fcos/pages/ordersubmit",
				"style": {
					"navigationBarTitleText": "快递下单"
				}
			},
			{
				"path": "fcos/pages/orderlist",
				"style": {
					"navigationBarTitleText": "订单列表"
				},
				"needLogin": true
			},
			{
				"path": "fcos/pages/orderaddlist",
				"style": {
					"navigationBarTitleText": "补单列表"
				},
				"needLogin": true
			},
			{
				"path": "fcos/pages/orderdetail",
				"style": {
					"navigationBarTitleText": "订单详情"
				},
				"needLogin": true
			}, {
				"path": "fcos/pages/index",
				"style": {
					"navigationBarTitleText": "首页",
					// #ifndef H5
					"navigationStyle": "custom",
					"app-plus": {
						"titleView": false
					}
					// #endif 

				}

			},
			{
				"path": "fcos/pages/member",
				"style": {
					"navigationBarTitleText": "个人中心",
					// #ifndef H5
					"navigationStyle": "custom",
					"app-plus": {
						"titleView": false
					}
					// #endif 
				}
			},
			{
				"path": "fcos/pages/fenxiao/index",
				"style": {
					"navigationBarTitleText": "分销中心"
				},
				"needLogin": true
			},
			// PAGE_END
EOT
];