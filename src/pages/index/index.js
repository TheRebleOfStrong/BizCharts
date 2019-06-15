/**
 * title: 首页 
 */
import React,{Component,Suspense} from 'react';
import {Row,Col} from 'antd';
import {connect} from 'dva';

//硬件信息模块
const HandwareRow = React.lazy(() => import('./HandwareRow'));
//待办审批模块
const ApprolRow = React.lazy(() => import('./ApprolRow'));
//业务分布模块
const BusinessRow = React.lazy(() => import('./BusinessRow'));
//任务栏分布模块
const TaskRow = React.lazy(() => import('./TaskRow'));
//节点资源模块
const ResourceRow = React.lazy(() => import('./ResourceRow'));


@connect(({loading,chart}) => ({
  chart,
  loading:loading.effects['chart/load']
}))
class Page extends Component {
  
  state = {
    currentBusType:'cpu',
    currentResourceType:'cpu',
  }
  
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
  
  //切换业务分布
  handleChange = e => {
    this.setState({
      currentBusType:e.target.value
    });
  }
  
  //切换节点资源
  resourceChange = e => {
    this.setState({
      currentResourceType:e.target.value
    });
  }
  
  render () {
    const {loading,chart} = this.props;
    const {
      handwareData,
      approlData,
      businessData,
      taskData,
      resourceData,
    } = chart;
    const {currentBusType,currentResourceType} = this.state;
    
    let businessPieData;
    if(currentBusType === 'cpu'){
      businessPieData = businessData[0];
    }else{
      businessPieData = currentBusType === 'gpu' ? businessData[1] : businessData[2] ;
    };
    
    return (
      <>
        <Suspense fallback={null}>
          <HandwareRow loading={loading} handwareData={handwareData} />
        </Suspense>
        <Row gutter={24}>
          <Col xs={24} lg={24} xl={12} style={{height:440,marginTop:24}}>
            <Suspense fallback={null}>
              <ApprolRow loading={loading} approlData={approlData} />
            </Suspense>
          </Col>
          <Col xs={24} lg={12} xl={6} style={{height:440,marginTop:24}}>
            <Suspense fallback={null}>
              <BusinessRow loading={loading} currentBusType={currentBusType} businessPieData={businessPieData} handleChange={this.handleChange} />
            </Suspense>
          </Col>
          <Col xs={24} lg={12} xl={6} style={{height:440,marginTop:24}}>
            <Suspense fallback={null}>
              <TaskRow loading={loading} taskData={taskData} />
            </Suspense>
          </Col>
        </Row>
        <Row style={{marginTop:24}}>
          <Col span={24}>
            <Suspense fallback={null}>
              <ResourceRow loading={loading} dataSource={resourceData} currentResourceType={currentResourceType} resourceChange={this.resourceChange} />
            </Suspense>
          </Col>
        </Row>
        <Row style={{marginTop:24}}>
          <Col span={24}>
            <Suspense fallback={null}>
              {/*<CoachRow loading={loading} dataSource={coachData} currentTime={currentResourceType} timeChange={this.timeChange} />*/}
            </Suspense>
          </Col>
        </Row>
      </>
    )
  }
}

export default Page;