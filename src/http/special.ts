 import request from '../utlis/request';
 //获取专题数据
 export function specialList(){
      return request.get('/topic/list')
 }
 //获取专题详情列表
 export function specialDetal(params:any){
     return request.get('/topic/detail',{params})
}

export function specialCorrelation(params:any){
     return request.get('/topic/related',{params})
}
