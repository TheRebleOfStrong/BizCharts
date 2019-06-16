import React,{PureComponent} from 'react';
import {Card,Radio} from 'antd';
import {connect} from 'dva';
import ChartsMany from '@/components/charts/ChartsMany';

@connect(({loading,chart}) => ({
  loading:loading.effects['chart/load'],
  chart
}))
class ResourceRow extends PureComponent{
  
  state = {
    currentResourceType:'cpu'
  }
  
  //切换节点资源
  resourceChange = e => {
    this.setState({
      currentResourceType:e.target.value
    });
  }
  
  render () {
    const {currentResourceType} = this.state;
    const {loading,chart} = this.props;
    const {resourceData} = chart;
    
    let chartData = [];
    if(resourceData[currentResourceType]){
      chartData = resourceData[currentResourceType];
    };
    return (
      <>
        <Card
          title="节点资源统计"
          loading={loading}
          bordered={false}
          extra={
            <Radio.Group defaultValue={currentResourceType} onChange={this.resourceChange} buttonStyle="solid">
              <Radio.Button value="cpu">CPU</Radio.Button>
              <Radio.Button value="gpu">GPU</Radio.Button>
              <Radio.Button value="memory">内存</Radio.Button>
              <Radio.Button value="disk">磁盘</Radio.Button>
              <Radio.Button value="io">IO</Radio.Button>
            </Radio.Group>
          }
        >
          <ChartsMany chartRes={chartData} />
        </Card>
      </>
    );
  }
};

export default ResourceRow;