<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\fcos\app\adminapi\controller;

use core\base\BaseAdminController;
use addon\fcos\app\service\core\BrandService;

/**
 * 聚合快递品牌列表控制器
 * Class TkjhkdBrand
 * @package app\adminapi\controller\fcos_brand
 */
class Brand extends BaseAdminController
{
   /**
    * 获取聚合快递品牌列表列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["site_id",""],
             ["express_no",""],
             ["name",""],
             ["logo",""],
             ["status",""],
             ["create_time",""],
             ["update_time",""],
             ["addon",""]
        ]);
        return success((new BrandService())->getPage($data));
    }

    /**
     * 物流公司详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success((new BrandService())->getInfo($id));
    }

    /**
     * 添加物流公司
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            ["name", ""],
            ["express_no", ""],
            ["logo", ""],

        ]);
        $this->validate($data, 'addon\fcos\app\validate\Brand.add');
        $id = (new BrandService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 物流公司编辑
     * @param int $id 物流公司id
     * @return \think\Response
     */
    public function edit($id)
    {
        $data = $this->request->params([
            ["name", ""],
            ["express_no", ""],
            ["logo", ""],

        ]);
        $this->validate($data, 'addon\fcos\app\validate\Brand.edit');
        (new BrandService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 物流公司删除
     * @param int $id 物流公司id
     * @return \think\Response
     */
    public function del(int $id)
    {
        (new BrandService())->del($id);
        return success('DELETE_SUCCESS');
    }

    public function init()
    {
        (new BrandService())->init();
        return success('INIT_DATA_SUCCESS');
    }


    /**
     * 获取物流公司列表
     * @return \think\Response
     */
    public function all()
    {
        return success((new BrandService())->getAllList());
    }
}
