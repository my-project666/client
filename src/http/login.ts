 import request from '../utlis/request'

 export function login(params:any){
     return request.post('/auth/loginByMobile',params)
 }