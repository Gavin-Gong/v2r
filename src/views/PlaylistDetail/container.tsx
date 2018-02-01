import * as React from 'react'
import ListDetail from './view'
import api from '../../api'
import { connect } from 'react-redux'
import * as actions from '../App/actions'

// import { AxiosResponse } from 'axios'
export class PlaylistDetailC extends React.Component<any, any> {
  componentDidMount() {
    api.getPlaylistDetail(this.props.match.params.id).then(({ data }) => {
      this.setState({
        trackList: data.playlist.tracks,
        info: data.playlist
      })
    })
  }
  render() {
    return <ListDetail trackList={this.state.trackList} info={this.state.info} playMusic={this.props.playMusic} />
  }
  constructor() {
    super()
    this.state = {
      trackList: [],
      info: {
        name: 'init',
        creator: {
          nickname: '',
          avatarUrl: '',
        },
        tags: [],
        description: '',
        coverImgUrl: ''
      }
    }
  }
  componentWillMount() {

  }
}

const mapStateToProps = (state: any, props: any) => {
  return state;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    playMusic: (id: number) => {
      console.log('dispatch')
      return () => dispatch(actions.playSong(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetailC)