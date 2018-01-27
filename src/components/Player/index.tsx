import * as React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export interface IProps {
  url: string,
  ablum: any,
  artist: any,
  name: string
}
export default class Player extends React.Component<IProps> {
  render () {
    const { url, ablum, name, artist } = this.props
    const artistName = artist.map((item: any) => item.name).join(',')
    return (
      <div className="player-bar">
        <audio src={url} controls autoPlay>
        </audio>
        <div className="control">

        </div>
        <div className="song">
          <img src={ablum.picUrl} alt="专辑图片"/>
          <div className="main">
            <p className="name">
              {`${name}`} -- 
              <Link to={`/artists/${artist[0].id}`}>{artistName}</Link>
            </p>
            <p className="progress-bar">---</p>
          </div>
        </div>
      </div>
    )
  }
  constructor() {
    super()
  }
}