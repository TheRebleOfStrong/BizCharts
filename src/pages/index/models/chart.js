import {getChartData} from '@/services/api';
export default {
  namespace:'chart',
  state:{
    handwareData:[],
    approlData:[],
    businessData:[],
    resourceData:[],
  },
  reducers:{
    save (state,{payload}) {
      return {
        ...state,
        ...payload
      }
    },
    clear () {
      return {
        handwareData:[],
        approlData:[],
        businessData:[],
        resourceData:[],
      }
    }
  },
  effects:{
    *load (_,{put,call}){
      const res = yield call(getChartData);
      yield put({
        type:'save',
        payload:res
      })
    }
  }
}