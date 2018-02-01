import * as React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Slider } from 'antd'
import HotKey from 'react-hot-keys'
import utils from './common/utils'
import './index.css'

interface ISong {
  id?: number | string,
  name: string,
  url: string,
  album: {
    name: string,
    image: string,
    [x: string]: any
  },
  artist: Array<{
    name: string,
    [y: string]: any
  }>,
  [x: string]: any
}
export interface IProps {
  playlist: Array<ISong>,
  curSongIdx?: number,
  // size: string,
  // mode: '',
  onNext?: () => void, 
  onPrev?: () => void, 
  onMode?: () => void, 
}
export interface IState {
  isPlaying: boolean
  totalTime: number | string,
  curTime: number | string,
  curSongIdx: number,
  audioPercent: number,
  volumePercent: number
}
const initState = {
  isPlaying: true,
  curSongIdx: 0,
  curTime: 0,
  totalTime: 0,
  audioPercent: 0,
  volumePercent: 0
}

export default class Player extends React.Component<IProps, IState> {
  audioEle: HTMLAudioElement
  audioTimer: any
  iconStyle: {
    fontSize: 20
  }  
  render () {
    const { playlist } = this.props
    const { curSongIdx, curTime, totalTime, audioPercent } = this.state
    const curSong = curSongIdx ? playlist[curSongIdx] : playlist[0]
    const artistName = curSong.artist.map((item: any) => item.name).join(',')
    return (
      <HotKey>
        <div className="player-bar">
          <audio 
            ref={(e) => {this.getAudioEle(e as HTMLAudioElement)}} 
            onEnded={this.onEnd}
            onProgress={this.onAudioChange} 
            src={curSong.url} 
            controls 
            autoPlay >
          </audio>
          <div className="main-content">
            <div className="song">
              <img src={curSong.album.image} alt="专辑图片"/>
              <div className="main">
                <p className="name">
                  {`${curSong.name}`} -- 
                  <Link to={`/artists/${curSong.artist[0].id}`}>{artistName}</Link>
                </p>
                <p className="album-name">{curSong.album.name}</p>
              </div>
            </div>
            <div className="progress-bar">
              <div className="pass-time">{curTime}</div>
              <Slider 
                className="progress-slider"  
                tipFormatter={undefined} 
                value={audioPercent}></Slider>
              <div className="total-time">{totalTime}</div>
            </div>
            <div className="control">
              <Icon type="step-backward" onClick={this.playPrev}/>
              {!this.state.isPlaying && <Icon onClick={this.play} type="play-circle" />}
              {this.state.isPlaying && <Icon onClick={this.pause} type="pause-circle" />}
              <Icon type="step-forward" onClick={this.playNext}/>
              <Slider vertical defaultValue={30} className="volume-slider"/>
            </div>
          </div>
        </div>
      </HotKey>
    )
  }
  getAudioEle (e: HTMLAudioElement) {
    this.audioEle = e
  }
  play() {
    this.audioEle.play()
    this.setState({
      isPlaying: true
    })
  }
  pause() {
    this.audioEle.pause()
    this.setState({
      isPlaying: false
    })
  }
  /**
   * @desc 获取相邻歌曲id
   */
  AdjacentSongIdx(mode: 'prev' | 'next') {
    const len = this.props.playlist.length
    const curIdx = this.state.curSongIdx
    if (mode === 'prev') {
      return curIdx - 1 < 0 ? len - 1 : curIdx - 1
    } else if (mode === 'next') {
      return curIdx + 1 > len - 1 ? 0 : curIdx + 1
    } else {
      return this.state.curSongIdx
    }
  }
  /** @desc 下一曲 */
  playNext(): void {
    this.setState({
      isPlaying: true,
      curSongIdx: this.AdjacentSongIdx('next')
    })
  }
  playPrev() {
    this.setState({
      isPlaying: true,
      curSongIdx: this.AdjacentSongIdx('prev')
    })    
  }
  getRandom(min: number = 0, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  playRandom() {
    const { curSongIdx } = this.state
    const len = this.props.playlist.length
    let tempIdx = curSongIdx

    do {
      tempIdx = this.getRandom(0, len - 1)
    } while (curSongIdx !== tempIdx);
    this.setState({
      isPlaying: true,
      curSongIdx: tempIdx
    })
  }
  /** @desc 当前歌曲结束 */
  onEnd() {
    this.playNext()
  }
  onAudioChange(e: any) {
    console.log(e)
  }
  setVolume() {
    this.audioEle.volume = 1
    this.audioEle.muted = true
    this.audioEle.duration
    this.audioEle.currentTime
  }
  /** @desc 随机模式 */
  random() {
    
  }
  /** @desc 顺序模式 */
  order() {

  }
  /** @desc 循环模式 */
  loop() {

  }
  /** @desc 单曲循环 */
  loopSingle() {

  }
  componentDidMount() {
    const { curSongIdx } = this.props
    if (curSongIdx) {
      this.setState({
        curSongIdx
      })
    }

    clearInterval(this.audioTimer)
    this.audioTimer = setInterval(() => {
      const { currentTime, duration } = this.audioEle
      this.setState({
        curTime: utils.convertSec2Time(currentTime),
        totalTime: utils.convertSec2Time(duration),
        audioPercent: utils.computePercent(currentTime, duration)
      })
    }, 1000)
  }
  
  constructor() {
    super()
    this.state = initState
    // bind to component
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.playNext = this.playNext.bind(this)
    this.playPrev = this.playPrev.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.onAudioChange = this.onAudioChange.bind(this)
  }
}