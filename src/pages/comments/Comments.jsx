import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import axios from 'axios'
import Coment from '../../components/commentCom/Coment'


const API = 'https://jsonplaceholder.typicode.com/'


const Comments = () => {

    return (
    <div id='comments'>
      <Hero text={"Comments"}/>
      <Coment/>
      {/* <Form/> */}
    </div>
  )
}

export default Comments