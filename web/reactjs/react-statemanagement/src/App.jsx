import React from 'react'
import Component1 from './components/Component1'
import { useContext } from 'react'
import { MyContext } from './ContextApi/ContextStore'

const App = () => {
  const data = useContext(MyContext)
  const text = "This is component three"

  return (
    <div>
      My name is : {data.name} <br />
      My age is : {data.age}




      <Component1 data={text}> 
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea earum ipsa maxime esse itaque doloribus error suscipit perspiciatis necessitatibus laudantium dolores sed incidunt ducimus, labore odio fuga delectus? Id, odio.</p>
      </Component1>
    </div>
  )
}

export default App
