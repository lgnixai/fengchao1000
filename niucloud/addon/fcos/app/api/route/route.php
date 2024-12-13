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

//
//
Route::group("fcos", function () {
    //易达回掉通知
    Route::post('yidanotice', 'addon\fcos\app\api\controller\Order@yidaNotice');
    //云洋回掉通知
    Route::post('yunyangnotice', 'addon\fcos\app\api\controller\Order@yunyangNotice');
    //辛达回掉通知
    Route::post('xindanotice', 'addon\fcos\app\api\controller\Order@xindaNotice');
    //快递鸟回掉通知
    Route::post('kdniaonotice', 'addon\fcos\app\api\controller\Order@kdniaoNotice');
});
/**
 * 路由（注意最好group路由名称与插件名称一致，防止路由冲突）
 */
Route::group("fcos", function () {
    //获取通知列表
//    Route::get('ceshi', 'addon\fcos\app\api\controller\Ceshi@ceshi');
    //获取通知列表
    Route::get('notice', 'addon\fcos\app\api\controller\Notice@list');
    //地理位置逆编码
    Route::get('regeo', 'addon\fcos\app\api\controller\Amap@regeo');
    //帮助中心
    Route::get('help', 'addon\fcos\app\api\controller\Help@lists');
    //品牌列表
    Route::get('brand', 'addon\fcos\app\api\controller\Brand@list');
})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false)
    ->middleware(ApiLog::class);


Route::group("fcos", function () {

    /***************************************************** 地址列表管理 ****************************************************/
    //地址列表
    Route::get('address', 'addon\fcos\app\api\controller\Address@lists');
    //地址详情
    Route::get('address/:id', 'addon\fcos\app\api\controller\Address@info');
    //地址详情,基于框架地址库
    Route::get('addressinfo/:id', 'addon\fcos\app\api\controller\Address@getInfo');
    //地址解析
    Route::get('address/fanyiaddress','addon\fcos\app\api\controller\Address@fanyiAdress');
    // 协议
    Route::get('agreement/:key', 'addon\fcos\app\api\controller\Agreement@info');
    //添加地址
    Route::post('address', 'addon\fcos\app\api\controller\Address@add');
    //编辑地址
    Route::put('address/:id', 'addon\fcos\app\api\controller\Address@edit');
    //删除地址
    Route::delete('address/:id', 'addon\fcos\app\api\controller\Address@del');
    //预下单
    Route::post('preorder', 'addon\fcos\app\api\controller\Order@preOrder');
    //创建订单
    Route::post('createorder', 'addon\fcos\app\api\controller\Order@createOrder');
    //订单状态
    Route::get('getorderstatus', 'addon\fcos\app\api\controller\Order@getOrderStatus');
    //订单列表
    Route::get('getorderlist', 'addon\fcos\app\api\controller\Order@getOrderList');
    //补差价订单
    Route::get('getorderaddlist', 'addon\fcos\app\api\controller\OrderAdd@getOrderList');
    //订单状态
    Route::get('getorderaddstatus', 'addon\fcos\app\api\controller\OrderAdd@getOrderStatus');
    Route::delete('deleteorderadd/:id', 'addon\fcos\app\api\controller\OrderAdd@deleteOrder');
    //订单详情
    Route::get('getorderinfo/:id', 'addon\fcos\app\api\controller\Order@getOrderInfo');
    //删除订单
    Route::delete('deleteorder/:id', 'addon\fcos\app\api\controller\Order@deleteOrder');
    //申请退款
    Route::post('applyrefund', 'addon\fcos\app\api\controller\Order@applyRefund');
    //查询运单轨迹
    Route::get('getdeliveryinfo/:deliveryid', 'addon\fcos\app\api\controller\Order@deliveryInfo');
    //关闭订单
    Route::get('closeorder/:id', 'addon\fcos\app\api\controller\Order@closeOrder');
    Route::post('checkfenxiao', 'addon\fcos\app\api\controller\Fenxiao@checkFenxiao');
    //检查未支付订单
    Route::get('checkaddpay', 'addon\fcos\app\api\controller\Order@checkAddPay');
    //统计分销订单
    Route::get('fenxiao/getfenxiaofnfo','addon\fcos\app\api\controller\Fenxiao@getFenxiaoInfo');
})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true)
    ->middleware(ApiLog::class);

