<?php
namespace addon\fcos\app\api\controller;

use addon\fcos\app\service\api\AgreementService;
use core\base\BaseApiController;

/**
 * 协议控制器
 * Class Article
 * @package app\api\controller\agreement
 */
class Agreement extends BaseApiController
{
    public function info(string $key) {
        $res = (new AgreementService())->getAgreement($key);
        return success($res);
    }
}