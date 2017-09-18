import * as React from 'react'
import { Card, Input, Avatar, Button, View } from './style'

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  handleSubmit (e: any) {
    console.log('click', e)
  }
  render() {
    return (
    <View>
      <Card>
        <Avatar>
        </Avatar>
        <Input type="text" onChange={e => console.log(e)} />
        <Input type="password"/>
        <Button onClick={this.handleSubmit}>登录</Button>
      </Card>
    </View>
  )}
}

export default Login
