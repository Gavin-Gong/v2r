import * as React from 'react'
import One from './one' 
// import { getPlayList } from '../../../api'
import { connect } from 'react-redux'
import * as actions from '../actions'
import './one.css'

// import { AxiosResponse } from 'axios'
export class OneC extends React.Component<any, any> {
  componentDidMount() {
    this.props.getPlayList()
  }
  render() {
    return <One {...this.props}/>
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
    getPlayList () {
      dispatch(actions.getPlayList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OneC)