import request from '../utlis/request'
export function home(){
    return request.get('/')
}

// export function category(parmas:any){
//     console.log(parmas)
//      return request.get('/goods/list',{
//          data:{
//              parmas
//          }
//      })
// }

export function catalog(){
    return request.get('/catalog/index')
}