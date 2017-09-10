import * as React from 'react';

export interface Props {
  change: any
}
class Foo extends React.Component<Props, any> {
  render () {
    const { change } = this.props
    return (
      <div>
        {/* component, {this.props.copyright} */}
        <button onClick={ change }>foo click</button>
      </div>
    );
  }
}

export default Foo;
