<?php
namespace addon\fcos\app\api\controller;
use addon\fcos\app\service\core\BrandService;
use core\base\BaseController;
use think\Response;
class Brand extends BaseController
{
    /**
     * 快递品牌列表
     * @return Response
     */
    public function list()
    {
        return success((new BrandService())->getPage());
    }
}