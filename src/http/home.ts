import request from '../utlis/request'
export function home(){
    return request.get('/')
}