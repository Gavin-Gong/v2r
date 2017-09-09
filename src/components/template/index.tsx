import * as React from 'react';

export interface Props {
  name: string;
}

function Template({ name }: Props) {
  return (
    <div>
      <p>{name}</p>
      <button>template update</button>
    </div>
  )
}
export default Template;