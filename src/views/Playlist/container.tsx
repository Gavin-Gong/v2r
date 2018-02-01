import * as React from 'react'
import One from './view'
import { connect } from 'react-redux'
import * as actions from './actions'

export class OneC extends React.Component<any, any> {
  componentDidMount() {
    this.props.getPlayList()
  }
  render() {
    return <One {...this.props} />
  }
  constructor() {
    super()
  }
}

const mapStateToProps = (state: any, props: any) => {
  return { playList: state.playList.data };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPlayList() {
      dispatch(actions.getPlayList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OneC)