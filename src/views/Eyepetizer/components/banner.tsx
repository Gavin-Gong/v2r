import * as React from 'react'

export default (props: any) => {
  const { image } = props
  return (
    <li className="eye-banner">
      <img src={image} alt=""/>
    </li>
  )
}