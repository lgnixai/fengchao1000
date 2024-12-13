import request from '@/utils/request'


/***************************************************** 聚合快递接口 ****************************************************/
/**
 * 获取余额
 * @param params
 * @returns
 */
export function getBalance() {
    return request.get(`fcos/getbalance`)
}
/**
 * 获取快递接口配置
 * @param params
 * @returns
 */
export function getJhkdConfig(params: Record<string, any>) {
    return request.get(`fcos/getconfig`, {params})
}
/**
 * 设置快递接口配置
 * @param params
 * @returns
 */
export function setJhkdConfig(params: Record<string, any>) {
    return request.post(`fcos/setconfig`, params,{showSuccessMessage: true})
}

/***************************************************** 聚合快递品牌列表 ****************************************************/

/**
 * 获取聚合快递品牌列表列表
 * @param params
 * @returns
 */
export function getTkjhkdBrandList(params: Record<string, any>) {
    return request.get(`fcos/brand`, {params})
}

//***************************************************** 聚合快递通知列表 ****************************************************/

/**
 * 获取聚合快递通知列表列表
 * @param params
 * @returns
 */
export function getTkjhkdNoticeList(params: Record<string, any>) {
    return request.get(`fcos/notice`, {params})
}

/**
 * 获取聚合快递通知列表详情
 * @param id 聚合快递通知列表id
 * @returns
 */
export function getTkjhkdNoticeInfo(id: number) {
    return request.get(`fcos/notice/${id}`);
}

/**
 * 添加聚合快递通知列表
 * @param params
 * @returns
 */
export function addTkjhkdNotice(params: Record<string, any>) {
    return request.post('fcos/notice', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑聚合快递通知列表
 * @param id
 * @param params
 * @returns
 */
export function editTkjhkdNotice(params: Record<string, any>) {
    return request.put(`fcos/notice/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除聚合快递通知列表
 * @param id
 * @returns
 */
export function deleteTkjhkdNotice(id: number) {
    return request.delete(`fcos/notice/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}
