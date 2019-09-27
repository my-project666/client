import request from '../utlis/request'

//获取用户
export function mys(){
    return request.get('/address/list')
}
