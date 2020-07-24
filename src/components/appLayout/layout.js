import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './layout.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import userData from '../api/data.json';
import Details from '../userDetails/details'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const userName = userData.members;


class AppLayout extends Component {
    constructor(props) {
       super(props);
       this.getData = this.getData.bind(this);
       this.state = {userId: ''};
     }

    getData = (key) => {
        this.setState({userId: key});
    }
    render() {
        const userId = this.state.userId;
        return (
          <>
          <Layout>
            <Header className="header">
              <div className="logo"> User Activities </div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sider className="site-layout-background" width={200}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                  >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
                        {userName.map(user => (
                            <Menu.Item key={user.id} onClick={this.getData}>{user.real_name}</Menu.Item>
                        ))}
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 550 }}><Details userid={userId.key}/></Content>
                {console.log('key',userId.key)}
              </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>User activities</Footer>
          </Layout>
          </>
        );
    }
}

export default AppLayout;
