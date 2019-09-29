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

export function list(page:any,size:any,categoryId:any){
     
    return request.get('/goods/list',{
        params:{
            page,
            size,
            categoryId
        }
    })
}
export function goolist(brandId:any,page:any,size:any){
     
    return request.get('/goods/list',{
        params:{
            brandId,
            page,
            size
        }
    })
}
export function detail(id:any,page:any,size:any){
     
    return request.get('/brand/detail',{
        params:{
            id,
            page,
            size,
        }
    })
}
export function detaildy(id:any){
     
    return request.get('/goods/detail',{
        params:{
            id
        }
    })
}
export function related(id:any){
     
    return request.get('/goods/related',{
        params:{
            id
        }
    })
}

// //制造商
// export function detail(){
//     return request.get('/brand/detail')
// }