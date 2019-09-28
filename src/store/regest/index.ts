import {lis} from '../../http/classify';

const regest ={
    namespaced:true,
    state:{
        query: {
            brandId: '',
            categoryId: '',
            sort: '',
            order: '',
            page: 1,
            size: ''
          },
          limit: 10,
          count: 0,
          value: []
    },
    mutations:{

    },
    actions:{
        async pullRefresh({commit, state}: any, payload: any){
            commit('setPage', 1);
            let params:any = {};
            for (let key in state.query){
              if (state.query[key]){
                params[key] = state.query[key]
              }
            }
            let data:any = await lis(params);
            commit('setValue', data.data);
          },
        
          async loadMore({commit, state}: any, {page}: any){
            commit('setPage', page);
            let params:any = {};
            for (let key in state.query){
              if (state.query[key]){
                params[key] = state.query[key]
              }
            }
            console.log('params...', params, page);
        
            let data:any = await lis(params);
            
         
            commit('appendValue', data.data);
          }
    }
}


export default regest;