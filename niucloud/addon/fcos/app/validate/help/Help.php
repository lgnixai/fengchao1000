<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\fcos\app\validate\help;
use core\base\BaseValidate;
/**
 * 帮助中心验证器
 * Class Help
 * @package addon\fcos\app\validate\help
 */
class Help extends BaseValidate
{

       protected $rule = [
            
        ];

       protected $message = [
            
        ];

       protected $scene = [
            "add" => ['title', 'content'],
            "edit" => ['title', 'content']
        ];

}
