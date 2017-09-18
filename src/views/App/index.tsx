import * as React from 'react';
// import Template from '../../containers/template'
// import Foo from '../../containers/foo'
// import XFooter from '../../components/Footer'
// import { Link, Route,  BrowserRouter as Router, } from 'react-router-dom'
import RouteView from '../../router'
import './index.css';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class App extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      // <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                {/* <Link to="/home">
                  <Icon type="home" />
                  <span>Home</span>
                </Link> */}
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Team</span></span>}
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat
                {/* <Route exact path="/home" component={XFooter}></Route> */}
                <RouteView></RouteView>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              v2r ©2017 Created by Gavin Gong
            </Footer>
          </Layout>
        </Layout>
      // </Router>
    );
  }
}
export default App;
