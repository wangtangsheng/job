import * as Api from './service.js'
import { routerRedux } from 'dva/router';
export default {
    namespace: 'demo',
    state: {
        demo: 1
    },
    reducers: {
      'delete'() {
        return {}
      },
      'update'(state, { payload: data }) {
        return { ...state, ...data }
      },
      'update_modal'(state, { payload: data }) {
        let ModalRecord = state.ModalRecord;
        return { ...state, ModalRecord: {
          ...ModalRecord,
          ...data
        } }
      }
    },
    subscriptions: {
        setup({ dispatch, history }) {
          history.listen(({ pathname }) => {
            if (pathname === '/demo') {
              console.log('进入到了路由页面')
            }
          })
        }
    },
    effects: {
        getData: function*(action, args){
            console.log(action)
            console.log(args);
            let {put, select, call} = args;
            const state = yield select();
            console.log(state,'all')
            yield put({
                type: 'update',
                payload: {
                    loading: true
                }
            })
            let params = action.payload;
            console.log(params,111)
            const res = yield call(Api.getData, params)
            let data = res.data;
            yield put({
                type: 'updateInfo',
                payload: {
                    ...data.Result[0]
                }
            })
            console.log(res)
        },
        updateInfo: function*(action, args){
            console.log(action, args,1);
            let {put, select, call} = args;
            let state = yield select((state)=>state)
            console.log(state, 'state')
            yield put({
                type: 'update',
                payload: {
                    isUpdating: true 
                }
            })
            let params = action.payload;
            const res = yield call(Api.updateData,params)
            console.log(res)
        },
        * Race (action,args){
            let {race,call} = args;
            console.log('竞争');
            let raceObj=  yield race({
                info: call(Api.updateData,{a:1}),
                data: call(Api.getData, {name:1})
            })
            if(raceObj.info){
                console.log('info',raceObj)
            }else{
                console.log('data',raceObj)
            }   
        },
        name(action){
            console.log(11)
        },
        *all (action, args){
            let {put} = args;
            yield put({
                type: 'update',
                payload: {
                    loading: true,
                    age: 0
                }
            })

            yield put(routerRedux.push({
                path: '/',
                query:{
                    page: 2
                }
            }))
        
        }
    }
  };