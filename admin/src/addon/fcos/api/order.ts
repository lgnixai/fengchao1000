import request from '@/utils/request'
export function sendNotice(id) {
    return request.get(`fcos/addorder/sendnotice/${id}`, { showSuccessMessage: true, showErrorMessage: true })
}
export function remarkAddOrder(params: Record<string, any>) {
    return request.post(`fcos/remarkadd`, params, { showErrorMessage: true, showSuccessMessage: true })
}
export function remarkOrder(params: Record<string, any>) {
    return request.post(`fcos/remark`, params, { showErrorMessage: true, showSuccessMessage: true })
}
export function getLink() {
    return request.get(`fcos/getlink`)
}
export function changeStatus(params: Record<string, any>) {
    return request.post(`fcos/changestatus`, params, { showErrorMessage: true, showSuccessMessage: true })
}
// USER_CODE_BEGIN -- fcos_order
/**
 * 获取订单列列表
 * @param params
 * @returns
 */
export function getOrderList(params: Record<string, any>) {
    return request.get(`fcos/order`, { params })
}
/**
 * 发单
 * @param order_id 订单order_id
 * @returns
 */
export function sendOrder(order_id) {
    return request.get(`fcos/sendorder/${order_id}`, { showErrorMessage: true, showSuccessMessage: true });
}
/**
 * 取消订单
 * @param params
 * @returns
 */
export function cancelOrder(params: Record<string, any>) {
    return request.post('fcos/cancelorder', params, { showErrorMessage: true, showSuccessMessage: true })
}
/**
 * 获取订单列详情
 * @param id 订单列id
 * @returns
 */
export function getOrderInfo(id: number) {
    return request.get(`fcos/order/${id}`);
}

/**
 * 添加订单列
 * @param params
 * @returns
 */
export function addOrder(params: Record<string, any>) {
    return request.post('fcos/order', params, { showErrorMessage: true, showSuccessMessage: true })
}
/**
 * 获取订单轨迹
 */
export function getDeliveryInfo(deliveryid) {
    return request.get(`fcos/getdeliveryinfo/${deliveryid}`)
}

/**
 * 编辑订单列
 * @param id
 * @param params
 * @returns
 */
export function editOrder(params: Record<string, any>) {
    return request.put(`fcos/order/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除订单列
 * @param id
 * @returns
 */
export function deleteOrder(id: number) {
    return request.delete(`fcos/order/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}

export function getWithMemberList(params: Record<string, any>) {
    return request.get('fcos/member', { params })
}

// USER_CODE_END -- fcos_order

/**
 * 获取支付类型
 */
export function getOrderPayType() {
    return request.get(`fcos/order/pay/type`)
}

/**
 * 获取订单来源
 */
export function getOrderFrom() {
    return request.get(`fcos/order/from`)
}






// USER_CODE_BEGIN -- fcos_order_add
/**
 * 获取订单列列表
 * @param params
 * @returns
 */
export function getOrderAddList(params: Record<string, any>) {
    return request.get(`fcos/orderadd`, { params })
}

/**
 * 获取订单列详情
 * @param id 订单列id
 * @returns
 */
export function getOrderAddInfo(id: number) {
    return request.get(`fcos/orderadd/${id}`);
}

/**
 * 添加订单列
 * @param params
 * @returns
 */
export function addOrderAdd(params: Record<string, any>) {
    return request.post('fcos/orderadd', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑订单列
 * @param id
 * @param params
 * @returns
 */
export function editOrderAdd(params: Record<string, any>) {
    return request.put(`fcos/orderadd/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除订单列
 * @param id
 * @returns
 */
export function deleteOrderAdd(id: number) {
    return request.delete(`fcos/orderadd/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}


// USER_CODE_END -- fcos_order_add




// USER_CODE_BEGIN -- fcos_order_log
/**
 * 获取订单日志列表
 * @param params
 * @returns
 */
export function getOrderLogList(params: Record<string, any>) {
    return request.get(`fcos/orderlog`, { params })
}

/**
 * 获取订单日志详情
 * @param id 订单日志id
 * @returns
 */
export function getOrderLogInfo(id: number) {
    return request.get(`fcos/orderlog/${id}`);
}

/**
 * 添加订单日志
 * @param params
 * @returns
 */
export function addOrderLog(params: Record<string, any>) {
    return request.post('fcos/orderlog', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑订单日志
 * @param id
 * @param params
 * @returns
 */
export function editOrderLog(params: Record<string, any>) {
    return request.put(`fcos/orderlog/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除订单日志
 * @param id
 * @returns
 */
export function deleteOrderLog(id: number) {
    return request.delete(`fcos/orderlog/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}



// USER_CODE_END -- fcos_order_log
