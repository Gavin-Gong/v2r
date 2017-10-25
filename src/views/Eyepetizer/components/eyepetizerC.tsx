import * as React from 'react'
import Eye from './eyepetizer'
import { connect } from 'react-redux'

export class EyepetizerC extends React.Component<any, any> {
  render() {
    return (
      <Eye {...this.state}/>
    )
  }
  componentDidMount() {
    // 
  }
}

const mapSateToProps = (state: any) => {
  return state
}

export default connect(mapSateToProps)(EyepetizerC)