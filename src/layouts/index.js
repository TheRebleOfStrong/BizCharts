import React,{Component,Fragment} from 'react';
import {Layout,Spin} from 'antd';
import {connect} from 'dva';
import styles from './index.less';
const {Header,Footer,Content,Sider} = Layout;

@connect(({loading}) => {
  return {
    spin:loading.global
  }
})
class BasicLayout extends Component{
	
  render () {
    const {children,spin} = this.props;
		return (
		  <Fragment>
        <Spin size='large' spinning={spin}>
          <Layout className={styles.main}>
            <Sider className={styles.sider}>
              <div className={styles.logo}>LOGO</div>
            </Sider>
            <Layout>
              <Header className={styles.header}>
                This Is Header
              </Header>
              <Content className={styles.content}>
                <div className={styles.wrap}>
                  {children}
                </div>
                <Footer className={styles.footer}>Ant Design ©2018 Created by Ant UED</Footer>
              </Content>
            </Layout>
          </Layout>
        </Spin>
      </Fragment>
		)
	}
}

export default BasicLayout;
