
import request from '@/utils/request'

// USER_CODE_BEGIN -- fcos_order
/**
 * 获取订单列列表
 * @param params
 * @returns
 */
export function getOrderList(params: Record<string, any>) {
    return request.get(`fcos/order`, {params})
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

export function getWithMemberList(params: Record<string,any>){
    return request.get('fcos/member', {params})
}

// USER_CODE_END -- fcos_order
