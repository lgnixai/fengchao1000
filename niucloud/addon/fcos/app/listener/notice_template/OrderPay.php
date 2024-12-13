<?php
declare (strict_types = 1);

namespace addon\fcos\app\listener\notice_template;

use addon\fcos\app\model\tkjhkdorder\Tkjhkdorder;
use app\listener\notice_template\BaseNoticeTemplate;
use think\facade\Log;

/**
 * 订单支付通知
 */
class OrderPay extends BaseNoticeTemplate
{
    private $key = 'fcos_order_pay';

    public function handle(array $params)
    {
        if ($this->key == $params['key']) {
            $order = (new Tkjhkdorder())->where(['order_id'=>$params['data']['order_id']])->findOrEmpty();
            if (!$order->isEmpty()) {
                $wap_domain = get_wap_domain($order['site_id']);
                return $this->toReturn(
                    [
                        '__wechat_page' => $wap_domain . '/addon/fcos/pages/orderdetail?id=' . $order['id'],//模板消息链接
                        '__weapp_page' => 'addon/fcos/pages/orderdetail?id=' . $order['id'],//小程序链接
                        'body' => '快递下单支付',
                        'order_no' => $order['order_id'],
                        'order_money' => $order['order_money'],
                        'create_time' => $order['create_time'],
                        'pay_time' => $order['pay_time'],
                        'url' => $wap_domain . '/addon/fcos/pages/orderdetail?id=' . $order['id']
                    ],
                    [
                        'member_id' => $order['member_id']
                    ]
                );
            }
        }
    }
}
