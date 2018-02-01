/// <reference types="react" />
// import React from 'react'
declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module 'react-hot-keys' {
  export = HotKey
}

declare class HotKey extends React.Component<any, any>{
  constructor();
  // render: any
}