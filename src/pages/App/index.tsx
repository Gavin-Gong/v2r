import * as React from 'react';
import Template from '../../containers/template'
import Foo from '../../components/foo'
import { Layout, Menu } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './index.css';

class App extends React.Component {
  constructor(props: object) {
    super(props);
  }
  componentDidMount () {
    console.log(this)
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Sider>
              <Menu mode="inline">
                <Menu.Item>
                    Home
                </Menu.Item>
                <SubMenu title="wolf">
                  <Menu.Item>
                    <Link to="/hello">
                      item
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/home">
                      item
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>

            <Layout>
              <Header>
                <Template></Template>
                <Foo></Foo>
              </Header>
              <Content>
              </Content>
              <Footer style={{ textAlign: 'center'}}>v2r ©2017 Created by Gavin Gong</Footer>
            </Layout>
          </Layout>
        </Router>
      </div>
    );
  }
}
export default App;
