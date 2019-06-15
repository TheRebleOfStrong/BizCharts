import React,{memo} from 'react';
import {Card} from 'antd';
import Pie from '@/components/charts/ChartsPie';
const Page = memo(({loading,taskData}) => {
  
  const options = {
    title:'任务栏分布',
    height:338,
  };
  
  return (
    <>
      <Card
        bordered={false}
        loading={loading}
        style={{height:'100%'}}
        title={'任务流分布'} 
      >
        <div>
          {taskData ? <Pie options={options} dataSource={taskData} /> : null}
        </div>
      </Card>
    </>
  );
});

export default Page;