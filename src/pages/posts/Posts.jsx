import React from 'react'
import Hero from '../../components/hero/Hero'
import PostsCom from '../../components/postsCom/PostsCom'


const Posts = () => {
  return (
    <div id='posts'>
      <Hero text={"Posts"}/>
      {/* <Form/> */}
      <PostsCom/>
    </div>
  )
}

export default Posts