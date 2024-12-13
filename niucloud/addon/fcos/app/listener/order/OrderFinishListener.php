<?php


namespace addon\fcos\app\listener\order;
use addon\fcos\app\service\core\OrderFinishService;
/**
 * 订单关闭
 */
class OrderFinishListener
{
    public function handle($data)
    {
        (new OrderFinishService())->orderFinish($data);
        return true;
    }
}
