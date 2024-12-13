<?php

namespace addon\fcos\app\dict\delivery;

use app\dict\pay\PayDict;

/**
 *订单相关枚举类
 */
class XindaBrandDict
{

    public static function getBrand($brand=null)
    {
        $data=[
            '申通'=> [
                'name' => '申通',
                'logo' => 'addon/fcos/logo/st.png'
            ],
            '极兔'=> [
                'name' => '极兔',
                'logo' => 'addon/fcos/logo/jt.png'
            ],
            '中通'=>[
                'name' => '中通',
                'logo' => 'addon/fcos/logo/zt.png'
            ],
            '德邦'=>[
                'name' => '德邦',
                'logo' => 'addon/fcos/logo/db.png'
            ],
            '圆通'=>[
                'name' => '圆通',
                'logo' => 'addon/fcos/logo/yt.png'
            ],
            '京东'=> [
                'name' => '京东',
                'logo' => 'addon/fcos/logo/jd.png'
            ],
            '韵达'=>[
                'name' => '韵达',
                'logo' => 'addon/fcos/logo/yd.png'
            ],
            '菜鸟'=>[
                'name' => '菜鸟',
                'logo' => 'addon/fcos/logo/cnsd.png'
            ],
            '顺丰'=>[
                'name' => '顺丰',
                'logo' => 'addon/fcos/logo/sf.png'
            ],
        ];
        if ($brand === null || !isset($data[$brand])) {
            return ['logo' => ''];
        }
        return $data[$brand];
    }

}