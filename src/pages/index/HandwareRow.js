import React,{memo} from 'react';
import {Row,Col,Card} from 'antd';
import styles from './index.less';
import ChartsCard from '@/components/charts/ChartsCard';

const laysout = {
  xs:24,
  lg:12,
  xl:6
};

const name = ['CPU ( G )','内寸 ( G )','GPU ( 卡 )','磁盘 ( G )'];
const color = ['#1890ff','#36cbcb','#4ecb73','#fbd437'];

//将{x:[],y:[]}转化为[{x:str,y:str}]
const getChartRes = (xAxis,yAxis) => {
  let arr = [];
  xAxis.forEach((item,index) => {
    let obj = {
      x:item,
      y:yAxis[index]
    };
    arr.push(obj);
  });
  return arr;
};

const Page = memo(({loading,handwareData}) => {
  return (
    <div style={{overflow:'hidden',marginBottom:-24}}>
      <Row gutter={24}>
        {
          handwareData.map((item,idx) => (
            <Col key={item.id} {...laysout} style={{marginBottom:24}}>
              <Card
                loading={loading}
                bordered={false}
                style={{overflow:'hidden'}}
              >
                <div className={styles.name}>{name[idx]}</div>
                <div className={styles.info}>
                  <div className={styles.fl}>{item.current}<span>{'/ '+item.total}</span></div>
                  <div className={styles.fr} style={{color:color[idx]}}>{Math.round(item.current/item.total*100)+'%'}</div>
                </div>
                <div style={{marginBottom:-10}}>
                  <ChartsCard dataSource={getChartRes(item.x,item.y)} color={color[idx]} />
                </div>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  );
});

export default Page;