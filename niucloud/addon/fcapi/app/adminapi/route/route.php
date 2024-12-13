<?php

use think\facade\Route;

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;

Route::group("fcapi", function () {
    Route::get('getlink', 'addon\fcos\app\adminapi\controller\order\Order@getLink');
//    Route::get('index', 'addon\fcos\app\adminapi\controller\Index@index');
//    //配置获取
//    Route::get('getconfig', 'addon\fcos\app\adminapi\controller\Config@getConfig');
//    //余额获取
//    Route::get('getbalance', 'addon\fcos\app\adminapi\controller\Config@getBalance');
//    //设置配置
//    Route::post('setconfig', 'addon\fcos\app\adminapi\controller\Config@setConfig');
//    //协议
//    Route::get('agreement', 'addon\fcos\app\adminapi\controller\Agreement@lists');
//    //协议详情
//    Route::get('agreement/:key', 'addon\fcos\app\adminapi\controller\Agreement@info');
//    //配置协议
//    Route::put('agreement/:key', 'addon\fcos\app\adminapi\controller\Agreement@edit');
//    //聚合快递品牌列表列表
//    Route::post('brand/init', 'addon\fcos\app\adminapi\controller\Brand@init');
//    Route::get('brand/all', 'addon\fcos\app\adminapi\controller\Brand@all');
//    Route::get('brand', 'addon\fcos\app\adminapi\controller\Brand@lists');
//    //聚合快递品牌列表详情
//    Route::get('brand/:id', 'addon\fcos\app\adminapi\controller\Brand@info');
//    //添加聚合快递品牌列表
//    Route::post('brand', 'addon\fcos\app\adminapi\controller\Brand@add');
//    //编辑聚合快递品牌列表
//    Route::put('brand/:id', 'addon\fcos\app\adminapi\controller\Brand@edit');
//    //删除聚合快递品牌列表
//    Route::delete('brand/:id', 'addon\fcos\app\adminapi\controller\Brand@del');
//    /***************************************************** 短信配置 ****************************************************/
//    //快递配置列表
//    Route::get('delivery/list', 'addon\fcos\app\adminapi\controller\DeliveryConfig@deliveryList');
//    //快递配置详情
//    Route::get('delivery/delivery/:delivery_type', 'addon\fcos\app\adminapi\controller\DeliveryConfig@deliveryConfig');
//    //快递配置修改
//    Route::put('delivery/delivery/:delivery_type', 'addon\fcos\app\adminapi\controller\DeliveryConfig@editDelivery');
//    //对接商城订单快递发货开始
//    Route::get('shop/order/delivery', 'addon\fcos\app\adminapi\controller\shop\Order@orderDelivery');
//    //对接商城订单发货类型
//    Route::get('shop/order/delivery/type', 'addon\fcos\app\adminapi\controller\shop\Order@getDeliveryType');
//    //对接商城商家发货地址库
//    Route::get('shop/order/sendaddress', 'addon\fcos\app\adminapi\controller\shop\Order@getSendAddress');
//    //快递shop预下单
//    Route::post('shop/order/preorder', 'addon\fcos\app\adminapi\controller\shop\Order@preOrder');
//    //订单列表
//    Route::get('shop/order/lists', 'addon\fcos\app\adminapi\controller\shop\Order@lists');
//    //订单详情
//    Route::get('shop/order/detail', 'addon\fcos\app\adminapi\controller\shop\Order@detail');
//    //订单发货
//    Route::post('shop/order/delivery', 'addon\fcos\app\adminapi\controller\shop\Order@orderDelivery');
//    //取消发货
//    Route::post('shop/order/cancelorder', 'addon\fcos\app\adminapi\controller\shop\Order@cancelOrder');
//    //更改订单状态
//    Route::post('changestatus', 'addon\fcos\app\adminapi\controller\order\Order@changeStatus');
//    //手动发送补差价通知
//    Route::get('addorder/sendnotice/:id', 'addon\fcos\app\adminapi\controller\order\OrderAdd@sendNotice');
//    //订单备注
//    Route::post('remarkadd', 'addon\fcos\app\adminapi\controller\order\OrderAdd@remark');


})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
//订单日志
Route::group('fcapi', function () {

    //订单日志列表
    Route::get('orderlog', 'addon\fcos\app\adminapi\controller\order\OrderLog@lists');
    //订单日志详情
    Route::get('orderlog/:id', 'addon\fcos\app\adminapi\controller\order\OrderLog@info');
    //添加订单日志
    Route::post('orderlog', 'addon\fcos\app\adminapi\controller\order\OrderLog@add');
    //编辑订单日志
    Route::put('orderlog/:id', 'addon\fcos\app\adminapi\controller\order\OrderLog@edit');
    //删除订单日志
    Route::delete('orderlog/:id', 'addon\fcos\app\adminapi\controller\order\OrderLog@del');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);


//补差订单
// USER_CODE_BEGIN -- fcos_order_add

Route::group('fcapi', function () {

    //订单列列表
    Route::get('orderadd', 'addon\fcos\app\adminapi\controller\order\OrderAdd@lists');
    //订单列详情
    Route::get('orderadd/:id', 'addon\fcos\app\adminapi\controller\order\OrderAdd@info');
    //添加订单列
    Route::post('orderadd', 'addon\fcos\app\adminapi\controller\order\OrderAdd@add');
    //编辑订单列
    Route::put('orderadd/:id', 'addon\fcos\app\adminapi\controller\order\OrderAdd@edit');
    //删除订单列
    Route::delete('orderadd/:id', 'addon\fcos\app\adminapi\controller\order\OrderAdd@del');

    Route::get('member', 'addon\fcos\app\adminapi\controller\order\OrderAdd@getMemberAll');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
Route::group('fcapi', function () {

    //订单列列表
    Route::get('order', 'addon\fcapi\app\adminapi\controller\order\Order@lists');
    //订单列详情
    Route::get('order/:id', 'addon\fcos\app\adminapi\controller\order\Order@info');
    //订单备注
    Route::post('remark', 'addon\fcos\app\adminapi\controller\order\Order@remark');
    //发单
    Route::get('sendorder/:order_id', 'addon\fcos\app\adminapi\controller\order\Order@sendOrder');
    //退款取消发单
    Route::post('cancelorder', 'addon\fcos\app\adminapi\controller\order\Order@cancelOrder');
    //添加订单列
    Route::post('order', 'addon\fcos\app\adminapi\controller\order\Order@add');
    //编辑订单列
    Route::put('order/:id', 'addon\fcos\app\adminapi\controller\order\Order@edit');
    //删除订单列
    Route::delete('order/:id', 'addon\fcos\app\adminapi\controller\order\Order@del');
    //会员列表
    Route::get('member', 'addon\fcos\app\adminapi\controller\order\Order@getMemberAll');
    //获取 支付类型
    Route::get('order/pay/type', 'addon\fcos\app\adminapi\controller\order\Order@getPayType');
    //获取 订单来源
    Route::get('order/from', 'addon\fcos\app\adminapi\controller\order\Order@getOrderFrom');
    //获取运单轨迹
    //查询运单轨迹
    Route::get('getdeliveryinfo/:deliveryid', 'addon\fcos\app\adminapi\controller\order\Order@deliveryInfo');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);



Route::group('fcapi', function () {
//网站端相关
    Route::get('site/api/domain', 'addon\fcos\app\adminapi\controller\app\Api@domain');

    Route::get('site/api/list', 'addon\fcos\app\adminapi\controller\app\Api@lists');
    Route::get('site/api/createNewApi', 'addon\fcos\app\adminapi\controller\app\Api@createNewApi');
    Route::get('site/api/getApi/:id', 'addon\fcos\app\adminapi\controller\app\Api@info');
    Route::post('site/api/add', 'addon\fcos\app\adminapi\controller\app\Api@add');
    Route::delete('site/api/:id', 'addon\fcos\app\adminapi\controller\app\Api@del');

    Route::get('site/allBalance', 'addon\fcapi\app\adminapi\controller\app\Balance@siteBalanceList');
    Route::get('site/siteBalance', 'addon\fcapi\app\adminapi\controller\app\Balance@BalanceBySiteList');
    Route::get('site/siteBalanceSum', 'addon\fcapi\app\adminapi\controller\app\Balance@BalanceSum');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);


Route::group('fcapi', function() {
    Route::get('fake/list', 'addon\fcapi\app\adminapi\controller\sandbox\Fake@list');
    Route::get('fake/:site_id/:id', 'addon\fcapi\app\adminapi\controller\sandbox\Fake@fake');

});