import * as React from 'react'
import './player.css'

export interface IProps {
  track: string
}
export default class Player extends React.Component<IProps> {
  render () {
    const { track } = this.props
    return (
      <div className="player-bar">
        <audio src={track} controls>
        </audio>
      </div>
    )
  }
  constructor() {
    super()
  }
}