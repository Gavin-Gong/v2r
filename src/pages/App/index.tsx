import * as React from 'react';
import './index.css';
// import Rx from 'rxjs';
const logo = require('../../assets/logo.svg');
import Footer from '../../components/footer';

export interface State {
  date: string;
}

class App extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      name: new Date()
    };
    // this.state.date = new Date();
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        name: new Date()
      });
    },          1000);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>{JSON.stringify(this.state)}</div>
        <Footer copyright="ss"/>
      </div>
    );
  }
}
export default App;
