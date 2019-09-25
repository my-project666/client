import {specialList,specialDetal,specialCorrelation} from '../../http/special'
 const special ={
    namespaced: true,
    state: {
        list:[],//专题数据列表
        specialDetal:'',  //专题列表详情
        correlationData:[]     //获取相关专题
    },
    mutations: {
        datalist(state:any,arr:any){  //专题数据
            state.list=arr;
        },
        specials(state:any,arr:any){  //专题详情数据 
            state.specialDetal=arr;
        },
        correlationlist(state:any,arr:any){   //获取相关装退数据
            state.correlationData=arr;
            console.log(state.correlationData)
        }
    },
    actions: {
        getList(context:any){   //专题数据列表
             specialList().then(res=>{
                 context.commit('datalist',res.data.data)
             })
        },
        specialDeta(context:any,id:any){  //专题列表详情
            specialDetal(id).then(res=>{
                 context.commit('specials',res.data)
            })
        },
        correlationList(context:any,id:any){  //专题列表详情
            specialCorrelation(id).then(res=>{
                context.commit('correlationlist',res.data)
            })
        },

    }
}
export default special;