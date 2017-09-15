import * as React from 'react'
import { Card, Input, Avatar, Button, View } from './style'
export interface Props {
  
}

const Login = (props: Props) => {
  return(
    <View>
      <Card>
        <Avatar></Avatar>
        <Input type="text" onChange={e => console.log(e)} />
        <Input type="password"/>
        <Button>登录</Button>
      </Card>
    </View>
  )
}
export default Login