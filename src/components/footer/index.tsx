import * as React from 'react';

export interface Props {
  copyright: string;
}
class Footer extends React.Component<Props, object> {
  render () {
    return (
      <div>
        component, {this.props.copyright}
      </div>
    );
  }
}

export default Footer;
