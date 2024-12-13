<?php

namespace addon\fcos\app\dict\delivery;

use app\dict\pay\PayDict;

/**
 *订单相关枚举类
 */
class DeliveryDict
{
    public const YIDA = 'yida';
    public  const YUNYANG = 'yunyang';
    public const XINDA='xinda';

    public const KDNIAO='kdniao';
    public static function getType()
    {
        return [
            self::KDNIAO => [
                'name' => '快递鸟',
                //配置参数
                'params' => [
                    'appid' => 'appid',
                    'appkey' => 'appkey',
                ]
            ],

            self::YIDA => [
                'name' => '易达178',
                //配置参数
                'params' => [
                    'bindMobile' => '绑定手机',
                    'username' => '用户名',
                    'privateKey'=>'密钥'
                ]
            ],
            self::YUNYANG => [
                'name' => '云洋物流',
                //配置参数
                'params' => [
                    'appid' => 'appid',
                    'appkey' => 'appkey',
                ]
            ],
            self::XINDA => [
                'name' => '辛达物流',
                //配置参数
                'params' => [
                    'username' => '账户',
                    'secretkey' => '密钥',
                ]
            ]

        ];
    }

}