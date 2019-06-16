import {getChartData} from '@/services/api';
export default {
  namespace:'chart',
  state:{
    handwareData:[],
    approlData:[],
    businessData:[],
    resourceData:[],
    coachData:[],
    serviceDevData:{},
    serviceTaskData:{},
    serviceTensData:{},
    serviceReasonData:{},
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
        coachData:[],
        serviceDevData:{},
        serviceTaskData:{},
        serviceTensData:{},
        serviceReasonData:{},
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
    },
    *fetchDate ({payload},{put,call}) {
      console.log('当前日期区间===',payload);
      const res = yield call(getChartData);
      yield put({
        type:'save',
        payload:{
          coachData: res.coachData,
        }
      })
    }
  }
}