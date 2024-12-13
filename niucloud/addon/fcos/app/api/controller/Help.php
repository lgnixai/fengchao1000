<?php
namespace addon\fcos\app\api\controller;
use core\base\BaseController;
use addon\fcos\app\service\api\HelpService;
class Help extends BaseController
{
    /**
     * 获取帮助信息
     * @return \think\Response
     */
    public function lists(){
        $data = $this->request->params([]);
        return success((new HelpService())->getPage($data));
    }

}