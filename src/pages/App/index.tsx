/* tslint-disable */
import * as React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
import './index.css';

class App extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      name: new Date()
    };
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        name: new Date()
      });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider>
            <Menu mode="inline">
              <Menu.Item>
                item
              </Menu.Item>
              <SubMenu>
                <Menu.Item>
                  item
                </Menu.Item>
                <Menu.Item>
                  item
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout>
            <Header>h</Header>
            <Content>c</Content>
            <Footer style={{ textAlign: 'center'}}>v2r ©2017 Created by Gavin Gong</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default App;
