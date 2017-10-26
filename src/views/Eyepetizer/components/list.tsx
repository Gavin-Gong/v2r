import React, { Component } from 'react';

class List extends Component<any, any> {
  render() {

    const renderItem = (props: any) => {
      return (
        <li>
          {props}
        </li>
      )
    }

    return (
      <ul className="tab">
        {this.props.data.map((item: any) => renderItem(item))}
      </ul>
    );
  }
}

export default List;