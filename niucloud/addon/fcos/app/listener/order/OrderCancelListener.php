<?php


namespace addon\fcos\app\listener\order;
use addon\fcos\app\service\api\OrderService as ApiOrderService;
/**
 * 订单关闭
 */
class OrderCancelListener
{
    public function handle($data)
    {
        (new ApiOrderService())->applyRefund($data);
    }
}
