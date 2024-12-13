<?php

namespace addon\fcos\app\service\fcapi;

use addon\fcos\app\dict\order\JhkdOrderAddDict;
use addon\fcos\app\dict\order\JhkdOrderDict;
use addon\fcos\app\job\notice\Webhook;
use addon\fcos\app\model\order\OrderAdd;
use addon\fcos\app\model\orderdelivery\OrderDelivery;
use addon\fcos\app\model\OrderDeliveryReal;
use addon\fcos\app\model\TkjhkdBrand;
use addon\fcos\app\model\tkjhkdorder\Tkjhkdorder;
use addon\fcos\app\service\core\CommonService;
use addon\fcos\app\service\core\OrderLogService;
use addon\fcos\app\service\core\YidaService;
use app\dict\pay\PayDict;
use app\model\pay\Pay;
use app\model\pay\Refund;
use app\service\core\notice\NoticeService;
use app\service\core\pay\CorePayService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseApiService;
use core\exception\CommonException;
use core\util\Snowflake;
use Exception;
use think\facade\Cache;
use think\facade\Db;
use think\facade\Log;

/**
 * 聚合快递订单服务层
 * Class OrderService
 * @package addon\fcos\service\core\order
 */
class FcBaseService extends BaseApiService
{
    protected $config;
    protected $deliveryModel;
    protected $model;
    public function __construct()
    {
        parent::__construct();
        $this->model = new TkjhkdOrder();
        $this->deliveryModel = new OrderDelivery();
        $this->config = $this->getConfig();
        if (!$this->config) throw new CommonException('基础配置未完成，请联系管理员');
    }
    public function getSiteCode()
    {
        $fromPath=root_path() . 'addon' . DIRECTORY_SEPARATOR . 'fcos' . DIRECTORY_SEPARATOR . 'site.crt';
        if (file_exists($fromPath)) {
            $content = file_get_contents($fromPath);
            return $content;
        } else {
            file_put_contents($fromPath,100000);
            return 100000;
        }
    }

    /**
     * 获取配置信息
     * @param $site_id
     * @param string $config_key
     */
    public function getConfig()
    {

        $admin_site_id = $this->getSiteCode();

        $info = (new CoreConfigService())->getConfig($admin_site_id, 'fcos_config');


        if (empty($info)) {
            $info['value'] = ['autosend' => 0];
        }
        return $info['value'];
    }
    public function create_no(string $prefix = '', string $tag = '')
    {

        $data_center_id = 1;
        $machine_id = 2;
        $snowflake = new Snowflake($data_center_id, $machine_id);
        $id = $snowflake->generateId();
        $no = $prefix . date('Ymd') . $tag . $id;
        $cacheKey = 'unique_no_' . $no;
        if (Cache::get($cacheKey)) {
            return create_no($prefix, $tag);
        } else {
            Cache::set($cacheKey, true, 60); // 设置过期时间为 60 秒
            return $no;
        }
    }


}