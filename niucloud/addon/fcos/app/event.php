<?php

return [
    //文件执行序列号
    'bind' => [
    ],

    'listen' => [

        //应用管理
        'AppManage' => ['addon\fcos\app\listener\AppManageListener'],
        //订单创建
        'PayCreate' => ['addon\fcos\app\listener\pay\PayCreateListener'],
        //支付成功
        'PaySuccess' => ['addon\fcos\app\listener\pay\PaySuccessListener'],
        //退款成功
        'RefundSuccess'=>['addon\fcos\app\listener\pay\RefundSuccessListener'],
        //发单操作
        'OrderSend'=>['addon\fcos\app\listener\order\OrderSendListener'],
        //订单完成事件
        'JhkdOrderFinish'=>['addon\fcos\app\listener\order\OrderFinishListener'],
        //取消订单，已付款情况
        'CancelOrder'=>['addon\fcos\app\listener\order\OrderCancelListener'],
        //预下单--封装接口
        "DeliveryPreOrder"=>['addon\fcos\app\listener\order\delivery\DeliveryPreOrderListener'],
        //发送下单--封装接口
        "DeliverySendOrder"=>['addon\fcos\app\listener\order\delivery\DeliverySendOrderListener'],
        //取消下单--封装接口
        "DeliveryCancelOrder"=>['addon\fcos\app\listener\order\delivery\DeliveryCancelOrderListener'],
        //增加导航
        'BottomNavigation' => [ 'addon\fcos\app\listener\BottomNavigationListener' ],
        //首页设置
        'WapIndex' => [ 'addon\fcos\app\listener\WapIndexListener' ],
        //消息通知
        'NoticeData' => [
            'addon\fcos\app\listener\notice_template\OrderPay',
            'addon\fcos\app\listener\notice_template\OrderPick',
            'addon\fcos\app\listener\notice_template\OrderAdd',
            'addon\fcos\app\listener\notice_template\OrderSign',
        ],
        'MemberRegister' => ['addon\fcos\app\listener\MemberRegisterListener' ],

        //站点创建后事件
        'AddSiteAfter' => ['addon\fcos\app\listener\AddSiteAfterListener'],
        //获取海报数据
        'GetPosterType' => ['addon\fcos\app\listener\poster\JhkdPosterType'],
        'GetPosterData' => ['addon\fcos\app\listener\poster\JhkdPoster'],
    ],

    'subscribe' => [
    ],
];
