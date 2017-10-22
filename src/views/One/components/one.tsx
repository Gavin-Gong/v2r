
import React, { Props, MouseEvent } from 'react'

export interface OneProps extends Props<any> {
  title: string
  author: string,
  content: string,
  wc: number,
  onRandom: any,
  [extraProps: string]: any
}

export default class One extends React.Component<OneProps, {}> {
  public handleRandom = (e: MouseEvent<any>) => {
    this.props.onRandom()
  }
  render() {
    const { author, title, content, wc } = this.props
    return (
      <div className="one">
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="content" dangerouslySetInnerHTML={{__html: content}}></div>
        <div className="wc">{wc}</div>

        <button onClick={this.handleRandom}>Random One</button>
      </div>
    )
  }
  constructor(props: OneProps) {
    super(props)
  }
}