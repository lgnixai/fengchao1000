import request from '@/utils/request'

/**
 * 获取协议列表
 * @returns
 */
export function getAgreementList() {
    return request.get(`fcos/agreement`)
}

/**
 * 协议详情
 * @returns
 */
export function getAgreementInfo(key: string) {
    return request.get(`fcos/agreement/${key}`);
}

/**
 * 更新协议
 * @returns
 */
export function editAgreement(params: Record<string, any>) {
    return request.put(`fcos/agreement/${params.key}`, params, { showSuccessMessage: true })
}
