import request from '@/utils/request'

/*********************************  站点相关  ***************************************/


/**
 * 站点余额调整
 * @param params
 * @returns
 */
export function getApiList( ) {
    return request.get(`fcos/site/api/list`)
}

export function getNewApi( ) {
    return request.get(`fcos/site/api/createNewApi`)
}
export function addApi(params: Record<string, any>) {
    return request.post('fcos/site/api/add', params, { showErrorMessage: true, showSuccessMessage: true })
}
export function deleteApi(id: number) {
    return request.delete(`fcos/site/api/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}

/***余额相关***/
export function getSiteBalanceList(params: Record<string, any>) {
    return request.get(`fcos/site/siteBalance`, { params })
}
export function getSiteBalanceSum() {
    return request.get(`fcos/site/siteBalanceSum`)
}

/*****沙盒相关****/
export function getApiKeyById(id: number ) {
    return request.get(`fcos/site/api/getApi/${id}`)
}


export function getApiDomain() {
    return request.get(`fcos/site/api/domain`)
}

export function getApiNameList() {
    return request.get(`sandbox/fake/list`)
}

export function getApiData(site_id:number,id:number) {
    return request.get(`sandbox/fake/${site_id}/${id}`)
}
/*****沙盒相关****/

export function sendSandBox(url:string,params: Record<string, any>) {
    return request.post(url, params,  )
}
