import React,{Component,Fragment} from 'react';
import {Layout} from 'antd';
import styles from './index.less';
const {Header,Footer,Content,Sider} = Layout;

class BasicLayout extends Component{
	
  render () {
    const {children} = this.props;
		return (
		  <Fragment>
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
      </Fragment>
		)
	}
}

export default BasicLayout;
