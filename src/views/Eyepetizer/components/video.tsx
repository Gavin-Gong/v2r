import * as React from 'react'

export default (props: any) => {
  const { category, description } = props
   return (
     <li className="eye-video">
      {category} - {description}
      {/* <video src={playUrl} controls width="100%"></video> */}
     </li>
   )
} 