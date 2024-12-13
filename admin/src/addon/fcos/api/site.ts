import request from '@/utils/request'

/*********************************  站点相关  ***************************************/

/**
 * 获取站点列表
 * @param params
 * @returns
 */
export function getSiteList(params: Record<string, any>) {
    return request.get(`fcos/site/site`, { params })
}

/**
 * 站点余额调整
 * @param params
 * @returns
 */
export function adjustBalance(params: Record<string, any>) {
    return request.post(`fcos/site/balance/adjust`, params, { showSuccessMessage: true })
}
/**
 * 站点余额流水
 * @param params
 * @returns
 */
export function getSiteBalanceList(params: Record<string, any>) {
    return request.get(`fcos/site/allBalance`, { params })
}
/*********************************  运费添加模板  ***************************************/
/**
 * 获取地址树列表
 * @param level
 */
export function getCompany() {
    return request.get(`fcos/delivery/company/all`);
}


export function getPriceTemplateInfoBySiteId(site_id: number) {
    return request.get(`fcos/site/price/template/site/${ site_id }`);
}
export function editPriceTemplate(params: Record<string, any>) {
    return request.put(`fcos/site/price/template/${ params.template_id }`, params, {
        showErrorMessage: true,
        showSuccessMessage: true
    })
}


export function importLinePrice(params: Record<string, any>) {
    return request.post(`fcos/line/price`, params, { showSuccessMessage: true })
}
