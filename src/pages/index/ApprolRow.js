import React,{memo} from 'react';
import {Card,List,Avatar} from 'antd';
import {Link} from 'dva/router';
import styles from './index.less';

const Page = memo(({loading,approlData}) => {
  return (
    <>
      <Card
        bordered={false}
        title='待办审批'
        loading={loading}
        extra={<Link to="/">更多</Link>}
      >
        <List
          itemLayout='horizontal'
          dataSource={approlData}
          style={{marginBottom:-14,marginTop:-14}}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<div className={styles.listBt}><Link to="/">{item.name}</Link><span>{item.time}</span></div>}
                description={<div className={styles.des}>{item.content} ( CPU: {item.cpu}, GPU: {item.gpu}, 内存: {item.memory} )</div>}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
});

export default Page;