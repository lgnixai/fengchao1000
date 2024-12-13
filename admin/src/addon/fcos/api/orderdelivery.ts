import request from '@/utils/request'

// USER_CODE_BEGIN -- fcos_order_delivery
/**
 * 获取订单快递信息列表
 * @param params
 * @returns
 */
export function getOrderDeliveryList(params: Record<string, any>) {
    return request.get(`fcos/orderdelivery`, {params})
}

/**
 * 获取订单快递信息详情
 * @param order_id 订单快递信息order_id
 * @returns
 */
export function getOrderDeliveryInfo(order_id: number) {
    return request.get(`fcos/orderdelivery/${order_id}`);
}

/**
 * 添加订单快递信息
 * @param params
 * @returns
 */
export function addOrderDelivery(params: Record<string, any>) {
    return request.post('fcos/orderdelivery', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑订单快递信息
 * @param order_id
 * @param params
 * @returns
 */
export function editOrderDelivery(params: Record<string, any>) {
    return request.put(`fcos/orderdelivery/${params.order_id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除订单快递信息
 * @param order_id
 * @returns
 */
export function deleteOrderDelivery(order_id: number) {
    return request.delete(`fcos/orderdelivery/${order_id}`, { showErrorMessage: true, showSuccessMessage: true })
}
// USER_CODE_END -- fcos_order_delivery
