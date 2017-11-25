
import React from 'react'

// export interface OneProps extends Props<any> {
//   onRandom: any,
//   [extraProps: string]: any
// }

export default class One extends React.Component<any, any> {
  render() {
    console.log(this.props)
    const { playList } = this.props

    const Card = (name: string, img: string, tags: Array<any>, trackNumberUpdateTime: number) => {
      return (
        <li>
          <div>name</div>
          <img src={img} />
          <ul>
            {/* {tags.map((item, key) => <li key={key}>{item.name}</li>)} */}
          </ul>
        </li>
      );
    };
    return (
      <div className="pay-list">
        <ul>
          {playList.map((item: any, key: number) => <Card key={key} {...item}/>)}
        </ul>
      </div>
    )
  }
  constructor() {
    super()
  }
}