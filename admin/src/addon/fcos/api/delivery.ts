
import request from '@/utils/request'

/**
 * 配置列表
 * @returns
 */
export function getDeliveryList() {
    return request.get('fcos/delivery/list')
}

/**
 * 配置详情
 * @param delivery_type
 * @returns
 */
export function getDeliveryInfo(delivery_type: string) {
    return request.get(`fcos/delivery/delivery/${delivery_type}`,)
}

/**
 * 配置修改
 * @param params
 */
export function editDelivery(params: Record<string, any>) {
    return request.put(`fcos/delivery/delivery/${params.delivery_type}`, params, { showSuccessMessage: true })
}