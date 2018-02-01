import * as React from 'react'
import './icon.css'

interface IProps {
  size?: 'small' | 'large' | 'normal' | number,
  color?: string,
  name: string
}

class Icon extends React.Component<IProps, {}> {
  public static defaultProps: IProps = {
    size: 'normal',
    name: 'menu'
  }
  render() {
    const { size, name, color } = this.props
    const className = `iconfont icon-${name}`
    const style = {
      color,
      fontSize: size + 'px'
    }
    return (
      <i className={className} style={style}></i>
    )
  }
}

export default Icon