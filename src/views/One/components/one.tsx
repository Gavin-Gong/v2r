
import React from 'react'
import { Link } from 'react-router-dom'
import './one.css'

export default class One extends React.Component<any, any> {
  render() {
    const { playList, getPlayList } = this.props
    /**
     * @desc Card 组件
     */
    const Card = (card: any) => {
      const { coverImgUrl, name, tags } = card;
      return (
        <Link to="/">
          <li className="playlist-card">
            <div className="card-bg" style={{ backgroundImage: `url(${coverImgUrl})` }}>
              <ul className="tag-list" >
                {tags.map((item: string, key: number) => <li key={key}>{item}</li>)}
              </ul>
            </div>
            <div className="card-title">{name}</div>
          </li>
        </Link>
      );
    };
    return (
      <div className="playlist list">
        <ul className="playlist">
          {playList.map((item: any) => <Card key={item.id} {...item}/>)}
        </ul>
        <button onClick={getPlayList}>button</button>
      </div>
    )
  }
  constructor() {
    super()
  }
}