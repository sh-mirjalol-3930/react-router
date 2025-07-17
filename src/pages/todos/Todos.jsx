import React from 'react'
import Hero from '../../components/hero/Hero'
import TodosCom from '../../components/todosCom/TodosCom'

const Todos = () => {
  return (
    <div id='todos'>
      <Hero text={"Todos"}/>
      <TodosCom/>

    </div>
  )
}

export default Todos