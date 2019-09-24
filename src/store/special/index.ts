import {specialList} from '../../http/special'
 const special ={
    namespaced: true,
    state: {
        list:[]
    },
    mutations: {
        datalist(state:any,arr:any){
            state.list=arr;
        }
    },
    actions: {
        getList(context:any){
             specialList().then(res=>{
                 context.commit('datalist',res.data.data)
             })
        }
    }
}
export default special;