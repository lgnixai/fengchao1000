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

namespace addon\fcos\app\adminapi\controller\site;

use addon\fcos\app\service\admin\shop\OrderService;
use addon\fcos\app\service\admin\shop\OrderDeliveryService;
use addon\fcos\app\service\admin\site\LinePriceService;
use core\base\BaseAdminController;
use core\exception\CommonException;
use think\facade\Cache;
use think\Response;

class LinePrice extends BaseAdminController
{


    public function add()
    {
        $data = $this->request->params([
            ["line_price", ""],
            ["express_no", ""],
            ["delivery", ""],
            ["site_id", ""],

        ]);
        // $this->validate($data, 'addon\fengchao\app\validate\delivery\Company.add');
        $id = (new LinePriceService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }


}
