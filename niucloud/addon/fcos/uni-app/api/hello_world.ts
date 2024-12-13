
import request from '@/utils/request'

/***************************************************** hello world ****************************************************/
export function getHelloWorld() {
    return request.get(`fcos/hello_world`)
}

