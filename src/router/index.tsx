import * as React from 'react';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom'
import { view as Login } from '../views/Login'
import { view as Playlist } from '../views/Playlist'
import { view as PlaylistDetail } from '../views/PlaylistDetail'

class RouteView extends React.Component {
  onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/one" component={Playlist}></Route>
          <Route path="/playlist/:id" component={PlaylistDetail}></Route>
        </Switch>
      </Router>
    );
  }
}
export default RouteView;
