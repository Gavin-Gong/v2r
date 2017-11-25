// import React from 'react'
import One from './one' 
// import { getPlayList } from '../../../api'
import { connect } from 'react-redux'
import * as actions from '../actions'
import './one.css'

// import { AxiosResponse } from 'axios'
// export class OneC extends React.Component<any, any> {
//   componentDidMount() {
//     getPlayList().then((res: AxiosResponse) => {
//       this.setState({
//         data: res.data.data
//       })
//     })
//   }
//   onRandom () {
//     getPlayList().then((res: AxiosResponse) => {
//       this.setState({ data: res.data.data });
//     });
//   }
//   render() {
//     return <One {...this.state.data} onRandom={this.onRandom}/>
//   }
//   constructor() {
//     super()
//     this.onRandom = this.onRandom.bind(this)
//     this.state = {
//       data: null
//     } 
//   }
// }

const mapStateToProps = (state: any, props: any) => {
  console.log(state, props)
  return {
    playList: new Array(10).fill({
      name: 'Gavin',
      tags: [],
    })
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchAction () { 
      dispatch(actions.setFilter('name'))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(One)