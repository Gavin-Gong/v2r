import React from 'react'
import One from './one' 
import { fetchOne, fetchOneRandom } from '../../../api'

import { AxiosResponse } from 'axios'
export default class OneC extends React.Component<any, any> {
  componentDidMount() {
    fetchOne().then((res: AxiosResponse) => {
      this.setState({
        data: res.data.data
      })
    })
  }
  onRandom () {
    fetchOneRandom().then((res: AxiosResponse) => {
      this.setState({
        data: res.data.data
      })
    })
  }
  render() {
    return <One {...this.state.data} onRandom={this.onRandom}/>
  }
  constructor() {
    super()
    this.onRandom = this.onRandom.bind(this)
    this.state = {
      data: null
    } 
  }
}