import * as React from 'react'

class Github extends React.Component<any, any> {
  componentDidMount() {
    console.log('mount')
  }
  constructor() {
    super()
    this.state = {
      toTop: 'wow from child'
    }
  }
  handleClick = (e: any) => {
    console.log(this, e.target)
    this.props.onClick(this.state.toTop)
  }
  render() {
    return (
      <div className="github">
        <div>{this.props.greet}</div>
        <div>github</div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Github
