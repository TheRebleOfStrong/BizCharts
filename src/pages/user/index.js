/**
 * title: 我的 
 */
import React,{Component,Suspense} from 'react';
import {connect} from 'dva';

const ServiceRow = React.lazy(() => import('./ServiceRow'));
//训练情况统计模块
const CoachRow = React.lazy(() => import('../index/CoachRow'));

@connect(({loading,chart}) => {
  return {
    chart,
    loading:loading.effects['chart/load']
  };
})
class UserPage extends Component{
  
  componentDidMount () {
    const {dispatch} = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type:'chart/load'
      });
    });
  }
  
  componentWillUnmount () {
    const {dispatch} = this.props;
    dispatch({
      type:'chart/clear'
    });
    cancelAnimationFrame(this.reqRef);
  }
  
  render () {
    const {loading,chart} = this.props;
    const {
      serviceDevData,
      serviceTeskData,
      serviceTansData,
      serviceReasonData,
    } = chart;
    
    const Tem = (<div style={{background:'#fff',width:'100%',height:300}}></div>);
    return (
      <>
        <div style={{marginBottom:24,marginTop:-24}}>
          <Suspense fallback={null}>
            <ServiceRow
              loading={loading}
              serviceDevData={serviceDevData}
              serviceTeskData={serviceTeskData}
              serviceTansData={serviceTansData}
              serviceReasonData={serviceReasonData}
            />
          </Suspense>
        </div>
        <div style={{marginBottom:24}}>
          <Suspense fallback={null}>
            <CoachRow />
          </Suspense>
        </div>
        <Suspense fallback={null}>
          {Tem}
        </Suspense>
      </>
    );
  }
};

export default UserPage;