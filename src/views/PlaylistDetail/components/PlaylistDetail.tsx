import React  from 'react'
import './PlaylistDetail.css'

export default class PlaylistDetail extends React.Component<any, any> {
  render () {
    console.log(this.props)
    const { info, trackList} = this.props

    // 音轨
    const Track = (track: any) => {
      return (
        <li className="track-item">
          <div className="song-title">{track.name}</div>
          <div>{track.ar.map((item: any) => item.name).join(',')} - {track.al.name}</div>
        </li>
      )
    };
    return (
      <div className="playlist-detail">
        <div className="playlist-info">
          <img src={info.coverImgUrl} alt="歌单图片"/>
          <div className="playlist-text">
            <h3 className="playlist-title"> {info.name} </h3>
            {/* <p> {info.description} </p> */}
            <div className="creator-wrapper">
              <img src={info.creator.avatarUrl} alt="头像" className="avatar"/>
              <p> {info.creator.nickname} </p>
            </div>
          </div>
          
        </div>
        <ul className="track-list">
          {trackList.map((item: any) => <Track {...item} key={item.id}/>)}
        </ul>
      </div>
    )
  }
  componentWillMount() {

  }
  constructor () {
    super()
  }
}