import React,{memo} from 'react';
import {Card,Radio} from 'antd';
import Pie from '@/components/charts/ChartsPie';
const Page = memo(({loading,businessPieData,currentBusType,handleChange}) => {
  
  const options ={
    title:'业务分布',
    height:305,
  };
  
  return (
    <>
      <Card
        bordered={false}
        loading={loading}
        style={{height:'100%'}}
        title={'业务分布'} 
      >
        <div style={{marginTop:-10}}>
          <Radio.Group size='size' defaultValue={currentBusType} buttonStyle="solid" onChange={handleChange}>
            <Radio.Button value='cpu'>CPU</Radio.Button>
            <Radio.Button value='gpu'>GPU</Radio.Button>
            <Radio.Button value='memory'>内存</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{marginTop:10}}>
          {businessPieData ? <Pie options={options} dataSource={businessPieData.res} /> : null}
        </div>
      </Card>
    </>
  );
});

export default Page;