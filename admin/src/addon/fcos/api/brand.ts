
import request from '@/utils/request'

/**
 * 配置列表
 * @returns
 */
export function getBrandList(params: Record<string, any>) {
    return request.get('fcos/brand')
}

export function getBrandAll() {
    return request.get('fcos/brand/all')
}
export function getCannelAll() {
    return request.get('fcos/channel/all')
}



/**
 * 配置详情
 * @param brand_type
 * @returns
 */
export function getBrandInfo(brand_type: string) {
    return request.get(`fcos/brand/brand/${brand_type}`,)
}




/**
 * 获取物流公司详情
 * @param company_id 物流公司company_id
 * @returns
 */
export function getCompanyInfo(company_id: number) {
    return request.get(`fengchao/brand/${ company_id }`);
}

/**
 * 添加物流公司
 * @param params
 * @returns
 */
export function addBrand(params: Record<string, any>) {
    return request.post('fcos/brand', params, { showErrorMessage: true, showSuccessMessage: true })
}
/**
 * 配置修改
 * @param params
 */
export function editBrand(params: Record<string, any>) {
    return request.put(`fcos/brand/${params.brand_type}`, params, { showSuccessMessage: true })
}

/**
 * 删除物流公司
 * @param company_id
 * @returns
 */
export function deleteBrand(id: number) {
    return request.delete(`fcos/brand/${ id }`, { showErrorMessage: true, showSuccessMessage: true })
}
/**
 * 初始化物流公司
 * @returns
 */
export function initBrand() {
    return request.post(`fcos/brand/init`, { showErrorMessage: true, showSuccessMessage: true })
}
