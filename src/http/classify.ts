 //分类页面数据
import request from '../utlis/request'
export function classifyInit(){  //获取分类页初始化信息
    return request.get('/catalog/index')
}
//获取当前分类信息和子分类
export function classifyCurrent(params:any){
     return request.get('/catalog/current',{params})
}

//获取分类ID分类Nav数据
export function classifyNic (params:any){
    return request.get('/goods/category',{params})
}

//根据分类Id或者制造商Id获取商品
export function lis (id:any){
    return request.get('/goods/list',{params:id})
}