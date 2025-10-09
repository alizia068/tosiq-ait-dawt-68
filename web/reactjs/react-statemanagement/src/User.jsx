import React from 'react'
import { useContext } from 'react'
import { MyContext } from './ContextApi/ContextStore'

const User = () => {
    const data = useContext(MyContext)
  return (
    <div>
      {data.name}
    </div>
  )
}

export default User
