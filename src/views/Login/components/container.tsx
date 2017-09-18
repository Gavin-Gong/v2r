// import * as React from 'react';
import Login from './login';

import { connect } from 'react-redux'
// // import actions from './actions'

function mapStateToProps() {
  return {
    name: '',
  }
}

function mapDispatchToProps() {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// function LoginWrapper() {
//   return <Login></Login>
// }

// export default LoginWrapper
