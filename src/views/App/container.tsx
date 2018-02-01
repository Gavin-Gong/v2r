import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import RouteView from '../../router'
import Player from '../../components/Player'
import './style.css';
import mockPlayList from '../../__mock__/songList'

 const playerState = mockPlayList
class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <div>
          <RouteView></RouteView>
          <Player {...playerState} />
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
