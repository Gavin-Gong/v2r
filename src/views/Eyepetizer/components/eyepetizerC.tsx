import * as React from 'react'
// import Eye from './eyepetizer'
import Tab from './tab'
import { connect } from 'react-redux'
import { IAction } from '../actions'

export class EyepetizerC extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Tab onTab={this.onTab}/>
      </div>
    )
  }
  onTab = (type: string) => {
    //
    console.log('wow', type)
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'EYE_TAB_FILTER',
      filterKey: 'ALL'
    } as IAction)
  }
}

const mapSateToProps = (state: any) => {
  return state
}

export default connect(mapSateToProps)(EyepetizerC)