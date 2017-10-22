// import * as React from 'react'
import Github from './github'
import * as React from 'react'
class GithubWrapper extends React.Component<any, any> {
  componentDidMount () {
    console.log('wrapper mount')
  }
  constructor() {
    super()
    this.state = {
      greet: 'from parent'
    }
  }
  onClick = (val: any) => {
    console.log(val)
  }
  render() {
    return (
      <Github greet={this.state.greet} onClick={this.onClick}></Github>
    )
  }
}

// function GithubWrapper() {
//   const greet = 'greet'
//   return (
//     <Github greet={greet}></Github>
//   )
// }

export default GithubWrapper
