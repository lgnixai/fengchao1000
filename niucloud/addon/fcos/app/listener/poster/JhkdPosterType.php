<?php
declare (strict_types = 1);

namespace addon\fcos\app\listener\poster;



/**
 * 商品海报类型
 */
class JhkdPosterType
{
    /**
     * 商品海报
     * @param $data
     * @return void
     */
    public function handle($data = [])
    {
        return [
            [
                'type' => 'fcos_poster',
                'addon' => 'fcos',
                'name' => '聚合快递海报',
                'decs' => '聚合快递海报',
                'icon' => 'addon/fcos/icon.png'
            ]
        ];

    }
}
