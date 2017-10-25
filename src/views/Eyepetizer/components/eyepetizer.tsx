import * as React from 'react'

export interface EyepetizerProps {
  [extraProp: string]: any
}

export default class Eyepetizer extends React.Component<EyepetizerProps, any> {
  render() {
    return (
      <div>this.props</div>
    )
  }
}
