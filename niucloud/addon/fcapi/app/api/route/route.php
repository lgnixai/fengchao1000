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

use app\api\middleware\ApiCheckToken;
use app\api\middleware\ApiLog;
use app\api\middleware\ApiChannel;
use think\facade\Route;
use addon\fcapi\app\api\middleware\ApiCheckSign;
use addon\fcapi\app\api\middleware\CallBackCheckSign;

/**
 * fcapi
 */
Route::group('v1', function() {

    // 退款方式
    Route::post('order', 'addon\fcos\app\api\controller\express\Express@order');

})
    ->middleware(ApiCheckSign::class)
    ->middleware(ApiLog::class);

Route::group('express', function() {
    Route::post('callback', 'addon\fcos\app\api\controller\express\Express@notify');
    //Route::get('test', 'addon\fengchao\app\api\controller\express\Order@test');
}) ->middleware(CallBackCheckSign::class)
    ->middleware(ApiLog::class);
