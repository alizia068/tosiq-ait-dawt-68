import React from 'react'
import Component2 from './Component2'
const Component1 = ({children, data}) => {
  return (
    <div>
      <Component2 data={data}/>
      {children}
    </div>
  )
}

export default Component1
