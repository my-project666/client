 import request from '../utlis/request';
 //获取专题数据
 export function specialList(){
      return request.get('/topic/list')
 }