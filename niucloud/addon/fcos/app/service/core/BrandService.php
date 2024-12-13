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

namespace addon\fcos\app\service\core;

use addon\fcos\app\model\TkjhkdBrand;
use core\base\BaseAdminService;
use think\facade\Db;

/**
 * 聚合快递品牌列表服务层
 * Class BrandService
 * @package app\service\admin\fcos_brand
 */
class BrandService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new TkjhkdBrand();
        $this->site_id = 0;
    }

    /**
     * 获取聚合快递品牌列表列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,express_no,name,logo';
        $order = '';
        $search_model = $this->model->where([['site_id', '=', 0]])->field($field)->order($order);
        $list = $this->pageQuery($search_model);

        return $list;
    }

    /**
     * 获取物流公司信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'express_no,name,logo';

        $info = $this->model->field($field)->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加物流公司
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data['site_id'] = $this->site_id;
        $data['create_time'] = time();
        $res = $this->model->create($data);
        return $res->id;
    }

    /**
     * 物流公司编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        $data['update_time'] = time();
        $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除物流公司
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $res = $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->delete();
        return $res;
    }

    /**
     * 初始化物流公司
     * @return bool
     */
    public function init()
    {
        $site_id = $this->site_id;
        $company_list = [
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '邮政EMS',
                'logo' => 'addon/fcos/express/ems.jpg',
                'express_no' => 'EMS',
            ],

            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '顺丰速运',
                'logo' => 'addon/fcos/express/shunfeng.png',
                 'express_no' => 'SF',


            ],
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '中通快递',
                'logo' => 'addon/fcos/express/zhongtong.png',

                'express_no' => 'ZTO',


            ],
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '圆通速递',
                'logo' => 'addon/fcos/express/yuantong.png',

                'express_no' => 'YTO',


            ],
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '申通快递',
                'logo' => 'addon/fcos/express/shentong.png',

                'express_no' => 'STO',


            ],
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '韵达速递',
                'logo' => 'addon/fcos/express/yunda.png',

                'express_no' => 'YD',


            ],
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '极兔速递',
                'logo' => 'addon/fcos/express/jitu.png',

                'express_no' => 'JTSD',


            ],
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '菜鸟速递',
                'logo' => 'addon/fcos/express/cainiao.jpg',

                'express_no' => 'CNSD',


            ],
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '京东快递',
                'logo' => 'addon/fcos/express/jingdong.jpg',

                'express_no' => 'JD',


            ] ,
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '德邦',
                'logo' => '',
                'express_no' => 'DOP',



            ],
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '菜鸟裹裹',
                'logo' => '',

                'express_no' => 'CAINIAO',



            ],
            [
                'site_id' => $site_id,
                'create_time' => time(),
                'name' => '丹鸟',
                'logo' => '',

                'express_no' => 'DNWL',



            ],
        ];

        $table_name = $this->model->getTable();

        Db::execute("truncate " . $table_name);
        $res = $this->model->insertAll($company_list);
        return $res;
    }

    /**
     * 获取物流公司列表
     * @param array $where
     * @param string $field
     * @return array
     */
    public function getAllList(array $where = [], $field = 'id,name,express_no')
    {
        $order = 'create_time desc';

        return $this->model->where([])->field($field)->order($order)->select()->toArray();
    }

}