import * as React from 'react'
// import Eye from './eyepetizer'
import Tab from './tab'
import List from './list'
import { connect } from 'react-redux'
import { FetchEye } from '../actions'

export class EyepetizerC extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Tab onTab={this.onTab}/>
        <List {...this.props.filterType.data}/>
      </div>
    )
  }
  onTab = (type: string) => {
    this.props.dispatch(FetchEye)
  }
  componentDidMount() {
    this.props.dispatch(FetchEye)
  }
}

const mapSateToProps = (state: any) => {
  return state
}

export default connect(mapSateToProps)(EyepetizerC)