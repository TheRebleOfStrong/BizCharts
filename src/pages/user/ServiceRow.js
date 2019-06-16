import React,{memo} from 'react';
import {Row,Col,Card,Icon,Button} from 'antd';

const Laysout = {
  xs:24,
  lg:12,
  xl:6,
  style:{marginTop:24}
}

export default memo(({loading,serviceDevData,serviceTaskData,serviceTensData,serviceReasonData}) => {
  
  return (
    <>
      <Row gutter={24}>
        <Col {...Laysout}>
          <Card
            loading={loading}
            bordered={false}
            actions={[<Button type='link' key="1">{serviceDevData.link}</Button>, <Button style={{color:"#999"}} type='link' key="2">立即创建</Button>]}
          >
            <Card.Meta
              avatar={<Icon type="fund" style={{fontSize:20}} theme="twoTone" />}
              title={<><span style={{fontSize:14}}>开发环境</span><span style={{float:'right',fontSize:14}}>实例数: {serviceDevData.instanceNum}</span></>}
              description={<div style={{whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>可用资源：{serviceDevData.cores}Cores | {serviceDevData.memory} | {serviceDevData.card}卡</div>}
            />
            {123121}
          </Card>
        </Col>
        <Col {...Laysout}>
          <Card
            loading={loading}
            bordered={false}
            actions={[<Button type='link' key="1">{serviceTaskData.link}</Button>, <Button style={{color:"#999"}} type='link' key="2">立即创建</Button>]}
          >
            <Card.Meta
              avatar={<Icon type="fund" style={{fontSize:20}} theme="twoTone" />}
              title={<><span style={{fontSize:14}}>任务流</span><span style={{float:'right',fontSize:14}}>工程/任务流: {serviceTaskData.proNum}/{serviceTaskData.taskNum}</span></>}
              description={<div style={{whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>可用资源：{serviceTaskData.cores}Cores | {serviceTaskData.memory} | {serviceTaskData.card}卡</div>}
            />
            asdasds
          </Card>
        </Col>
        <Col {...Laysout}>
          <Card
            loading={loading}
            bordered={false}
            actions={[<Button type='link' key="1">{serviceTensData.link}</Button>, <Button style={{color:"#999"}} type='link' key="2">立即创建</Button>]}
          >
            <Card.Meta
              avatar={<Icon type="fund" style={{fontSize:20}} theme="twoTone" />}
              title={<><span style={{fontSize:14}}>Tensorboard</span><span style={{float:'right',fontSize:14}}>实例数: {serviceTensData.instanceNum}</span></>}
              description={<div style={{whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>可用资源：{serviceTensData.cores}Cores | {serviceTensData.memory} | {serviceTensData.card}卡</div>}
            />
            asdasds
          </Card>
        </Col>
        <Col {...Laysout}>
          <Card
            loading={loading}
            bordered={false}
            actions={[<Button type='link' key="1">{serviceReasonData.link}</Button>, <Button style={{color:"#999"}} type='link' key="2">立即创建</Button>]}
          >
            <Card.Meta
              avatar={<Icon type="fund" style={{fontSize:20}} theme="twoTone" />}
              title={<><span style={{fontSize:14}}>推理服务</span><span style={{float:'right',fontSize:14}}>实例数: {serviceReasonData.instanceNum}</span></>}
              description={<div style={{whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>可用资源：{serviceReasonData.cores}Cores | {serviceReasonData.memory} | {serviceReasonData.card}卡</div>}
            />
            asdasds
          </Card>
        </Col>
      </Row>
    </>
  );
});