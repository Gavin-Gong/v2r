import * as React from 'react';
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import { view as Login } from '../views/Login'
class RouteView extends React.Component {
  onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <Router>
        <Route path="/login" component={Login}></Route>
      </Router>
    );
  }
}
export default RouteView;
