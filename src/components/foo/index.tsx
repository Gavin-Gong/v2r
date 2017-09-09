import * as React from 'react';

export interface Props {
  // copss
}
class Footer extends React.Component<Props, object> {
  render () {
    return (
      <div>
        {/* component, {this.props.copyright} */}
        <button>foo click</button>
      </div>
    );
  }
}

export default Footer;
