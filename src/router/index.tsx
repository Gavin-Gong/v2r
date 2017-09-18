import * as React from 'react';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom'
import { view as Login } from '../views/Login'
import { view as Github } from '../views/Github'
class RouteView extends React.Component {
  onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/github" component={Github}></Route>
        </Switch>
      </Router>
    );
  }
}
export default RouteView;
