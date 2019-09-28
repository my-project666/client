 import {goodsDetail,goodsRelated} from '../../http/goodsShop'
 const shops = {
      namespaced:true,
      state:{ 
            shopDetail:'',
            shopRelated:'',
            info:{},
            gallery:[],
      },
      mutations:{
           getshopDetial(state:any,arr:any){    //获取详情数据
                 state.shopDetail=arr;
                 state.info=arr.info;
                 state.gallery=arr.gallery;
           },
           getshopRelated(state:any,arr:any){   //获取相关数据
                state.shopRelated=arr
           }
      },
      actions:{
           getgoodsDetail(context:any,id:any){
                goodsDetail(id).then(res=>{
                    console.log(res.data)
                    context.commit('getshopDetial',res.data)
                })
           },
           getgoodsRelated(context:any,id:any){
                goodsRelated(id).then(res=>{
                    console.log(res.data)
                    context.commit('getshopRelated',res.data)
                })
           }
      }
 }
 
 export default shops