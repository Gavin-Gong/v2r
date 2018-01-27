import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import RouteView from '../../router'
import Player from '../../components/Player'
import './style.css';

class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <div>
          <RouteView></RouteView>
          <Player {...this.props.song} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: any, props: any) => {
  console.log(state)
  return {
    song: state.curSong
  }
}
export default connect(mapStateToProps)(App);
