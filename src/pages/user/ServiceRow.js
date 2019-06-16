import React,{memo} from 'react';
import {Row,Col,Card,Icon} from 'antd';

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
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            23113
          </Card>
        </Col>
        <Col {...Laysout}>
          <Card
            loading={loading}
            bordered={false}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            23113
          </Card>
        </Col>
        <Col {...Laysout}>
          <Card
            loading={loading}
            bordered={false}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            23113
          </Card>
        </Col>
        <Col {...Laysout}>
          <Card
            loading={loading}
            bordered={false}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            23113
          </Card>
        </Col>
      </Row>
    </>
  );
});