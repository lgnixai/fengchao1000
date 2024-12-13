<?php

namespace addon\fcos\app\validate;

/**
 * 聚合快递品牌列表验证器
 * Class TkjhkdBrand
 * @package app\validate\fcos_brand
 */
class Brand extends \think\Validate
{

       protected $rule = [

            'express_no' => 'require',
            'name' => 'require',
            'create_time' => 'require',
            'update_time' => 'require',

        ];

       protected $message = [];

       protected $scene = [
            "add" => ['express_no','name'],
            "edit" => ['express_no','name']
        ];

}