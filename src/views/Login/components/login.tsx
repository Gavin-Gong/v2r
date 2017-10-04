import * as React from 'react'
import './styles.css'

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  handleSubmit (e: any) {
    console.log('click', e)
  }
  render() {
    return (
    <div className="login">
      <div>
        <div>
        </div>
        <input type="text" onChange={e => console.log(e)} />
        <input type="password"/>
        <button onClick={this.handleSubmit}>登录</button>
      </div>
    </div>
  )}
}

export default Login
