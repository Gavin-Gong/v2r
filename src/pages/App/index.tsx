/* tslint-disable */
import * as React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

    const HelloWord = function() {
      return (<div>
        hello word
      </div>)
    }
    return (
      <div className="App">
        <Router>
          <Layout>
            <Sider>
              <Menu mode="inline">
                <Menu.Item>

                </Menu.Item>
                <SubMenu>
                  <Menu.Item>
                    <Link to="/hello">
                      item
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link>
                      item
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>

            <Layout>
              <Header>h</Header>
              <Content>
                <Route path="/hello" component={HelloWord}></Route>
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
