import request from '@/utils/request'

/*********************************  站点相关  ***************************************/


/**
 * 站点余额调整
 * @param params
 * @returns
 */
export function getApiList( ) {
    return request.get(`fcapi/site/api/list`)
}

export function getNewApi( ) {
    return request.get(`fcapi/site/api/createNewApi`)
}
export function addApi(params: Record<string, any>) {
    return request.post('fcapi/site/api/add', params, { showErrorMessage: true, showSuccessMessage: true })
}
export function deleteApi(id: number) {
    return request.delete(`fcapi/site/api/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}

/***余额相关***/
export function getBalanceList(params: Record<string, any>) {
    return request.get(`fcapi/site/siteBalance`, { params })
}
export function getBalanceSum() {
    return request.get(`fcapi/site/siteBalanceSum`)
}

/*****沙盒相关****/
export function getApiKeyById(id: number ) {
    return request.get(`fcapi/site/api/getApi/${id}`)
}


export function getApiDomain() {
    return request.get(`fcapi/site/api/domain`)
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
