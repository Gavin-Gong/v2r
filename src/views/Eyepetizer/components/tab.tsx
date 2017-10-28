import React, { Component, MouseEvent } from 'react';

export interface IEyeProps {
  onTab: any,
  [prop: string]: any
}

class Tab extends Component<IEyeProps, any> {
  render() {
    // render one tab
    const TabItem = (props: {type: string, name: string}) => {
      return (
        <li className="tab-item" data-type={props.type}>
          <label>
            <input type="radio" name="tab" defaultChecked={props.type === 'ALL'}/>
            {props.name}
          </label>
        </li>  
      )
    }

    return (
      <ul className="tab" onClick={this.handleClick}>
        {this.state.navList.map((item: any, index: number) => <TabItem {...item} key={index}/>)}
      </ul>
    );
  }
  handleClick(e: MouseEvent<any>) {
    const ele = e.target as HTMLElement
    ele.classList.contains('tab-item') && this.props.onTab(ele.dataset.type)
  }
  constructor(props: any) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      navList: [
        {
          name: '全部',
          type: 'ALL'
        },
        {
          name: '视频',
          type: 'VIDEO'
        },
        {
          name: '文字',
          type: 'TEXT'
        },
        {
          name: '图片',
          type: 'IMG'
        },
      ] 
    }
  }
}

export default Tab;