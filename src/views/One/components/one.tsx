
import React from 'react'

export default class One extends React.Component<any, any> {
  render() {
    const { playList, getPlayList } = this.props
    /**
     * @desc Card 组件
     */
    const Card = (card: any) => {
      const { coverImgUrl, name, tags } = card;
      return (
        <li>
          <div>{name}</div>
          <img src={coverImgUrl}/>
          <ul>
            {tags.map((item: string, key: number) => <li key={key}>{item}</li>)}
          </ul>
        </li>
      );
    };
    return (
      <div className="pay-list">
        <ul>
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