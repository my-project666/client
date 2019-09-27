import request from '../utlis/request';  //商品信息

export function goodsRelated(params:any){     //相关商品
      return request.get('/goods/related',{params})
}

export function goodsDetail(params:any){   //获取商品详情
    return request.get('/goods/detail',{params})
}