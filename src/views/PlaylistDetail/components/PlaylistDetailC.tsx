import * as React from 'react'
import ListDetail from './PlaylistDetail'
import { getPlayListDetail } from '../../../api'
import { connect } from 'react-redux'
// import * as actions from '../actions'

// import { AxiosResponse } from 'axios'
export class PlaylistDetailC extends React.Component<any, any> {
  componentDidMount() {
    getPlayListDetail({
      id: this.props.match.params.id
    }).then(({ data }) => {
      this.setState({
        trackList: data.playlist.tracks,
        info: data.playlist
      })
    })
  }
  render() {
    return <ListDetail trackList={this.state.trackList} info={this.state.info}/>
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
}

const mapStateToProps = (state: any, props: any) => {
  return state;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetailC)