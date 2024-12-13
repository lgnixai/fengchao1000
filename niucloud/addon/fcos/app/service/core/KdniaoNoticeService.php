<?php

namespace addon\fcos\app\service\core;

use core\base\BaseApiService;
use core\exception\CommonException;
use think\Exception;
use think\facade\Log;

/**
 * 快递鸟回掉接口对接
 */
class KdniaoNoticeService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->changeService = new KdniaoChangeNoticeService();
    }


    /**
     * 回调处理
     */
    public function notice($data)
    {
        Log::write('-----快递鸟回调处理-----' . date('Y-m-d H:i:s', time()));
        Log::write($data);
        try {
           return $this->changeService->changeOrderStatus($data);
        } catch (Exception $e) {
            throw new CommonException($e->getMessage());
        }
    }

}