import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import RouteView from '../../../router'
import './index.css';

import Player from '../components/player'
class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <div>
          <RouteView></RouteView>
          <Player track={this.props.track} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: any, props: any) => {
  console.log(state)
  return {
    track: state.curSong.url
  }
}
export default connect(mapStateToProps)(App);
