import React, { Component } from 'react';
import Banner from './banner'
import Video from './video'
class List extends Component<any, any> {
  render() {
    const Item = (props: any) => {
      const { type } = props
      switch (type) {
        case 'banner2':
          return <Banner {...props.data}/>
        case 'video':
          return <Video {...props.data}/>
        default:
          return null
      }
    }
    console.log(this.props)
    return (
      <ul className="tab">
        {this.props.itemList.map((item: any, index: number) => <Item key={index} {...item}/>)}
      </ul>
    );
  }
}

export default List;