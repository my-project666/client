//分类页面仓库
import {classifyInit,classifyCurrent,classifyNic,lis} from '../../http/classify'

const classify={
     namespaced: true,
     state:{
        classifyData:'',  //左侧数据
        defaultData:'',  //右侧默认数据
        classifNicdata:'',  //分类详情导航
        lisData:''     //分类详情数据
     },
     mutations:{
         getclassifylist(state:any,arr:any){
            state.classifyData=arr;
            //console.log(state.classifyData)
         },
         defaultDatas(state:any,arr:any){
            state.defaultData=arr;
            //console.log(state.defaultData)
         },
         classifyDetals(state:any,arr:any){   //详情数据
             state.classifNicdata=arr;
             //console.log(state.classifNicdata)
         },
         list(state:any,arr:any){  //分类详情数据
            state.lisData=arr;
           // console.log(state.lisData)
         }
     },
     actions:{
        getclassify(context:any){   //左侧数据
            classifyInit().then(res=>{
                context.commit('getclassifylist',res.data.categoryList)
                context.commit('defaultDatas',res.data.currentCategory)
            })
        },
        classifyList(context:any,id:any){   //右侧默认数据
            classifyCurrent(id).then(res=>{
                context.commit('defaultDatas',res.data.currentCategory)
            })
        },
        classifyNics(context:any,id:any){
            classifyNic(id).then(res=>{
                   //console.log(res.data)
                context.commit('classifyDetals',res.data)
            })
        },
        xiangList(context:any,id:any){
            lis(id).then(res=>{
                console.log(res.data)
                context.commit('list',res.data.goodsList)
            })
        }

     }
}


export default classify;
