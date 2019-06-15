import React,{memo} from 'react';
import {Card,Radio} from 'antd';
import ChartsMany from '@/components/charts/ChartsMany';

const Page = memo(({loading,dataSource,currentResourceType,resourceChange}) => {
  const chartData = [];
  // console.log(dataSource,currentResourceType);
  if(dataSource && currentResourceType){
    let arr = dataSource[currentResourceType];
    if(arr){
      dataSource.xAxis.forEach((item,index) => {
        let obj = {};
        obj.x = item;
        arr.forEach( key => {
          obj[key.name] = Number(key.yAxis[index]);
        });
        chartData.push(obj);
      });
    };
  };
  
  return (
    <>
      <Card
        title="节点资源统计"
        loading={loading}
        extra={
          <Radio.Group defaultValue={currentResourceType} onChange={resourceChange} buttonStyle="solid">
            <Radio.Button value="cpu">CPU</Radio.Button>
            <Radio.Button value="gpu">GPU</Radio.Button>
            <Radio.Button value="memory">内存</Radio.Button>
            <Radio.Button value="disk">磁盘</Radio.Button>
            <Radio.Button value="io">IO</Radio.Button>
          </Radio.Group>
        }
      >
        {chartData ? <ChartsMany chartRes={chartData} /> : null}
      </Card>
    </>
  );
});

export default Page;