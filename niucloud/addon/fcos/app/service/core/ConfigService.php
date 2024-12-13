<?php

namespace addon\fcos\app\service\core;

use addon\fcos\app\service\core\CommonService;
use core\base\BaseAdminService;
use app\service\core\sys\CoreConfigService;

/**
 * 配置信息服务层
 * Class ConfigService
 * @package addon\fcos\service\core\config
 */
class ConfigService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();

    }

    /**
     * 获取配置信息
     * @param $site_id
     * @param string $config_key
     */
    public function getConfig()
    {
        $info = (new CoreConfigService())->getConfig($this->site_id, 'FCOS_CONFIG');
        if ($info) {
            $info['value']['noticeurl'] = (new CommonService())->getUrl() . '/api/fcos/yidanotice';
            //增加云洋回掉URL
            $info['value']['noticeurlyy'] = (new CommonService())->getUrl() . '/api/fcos/yunyangnotice';
            //辛达回掉
            $info['value']['noticeurlxd'] = (new CommonService())->getUrl() . '/api/fcos/xindanotice';
        }
        return $info;
    }

    /**
     * 设置配置信息
     * @param $site_id
     * @param string $config_key
     * @return string|null
     */
    public function setConfig($value)
    {
        return (new CoreConfigService())->setConfig($this->site_id, 'FCOS_CONFIG', $value);
    }

    public function getSiteId()
    {
        return $this->site_id;
    }
}