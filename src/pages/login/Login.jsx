import React from 'react'
import Hero from '../../components/hero/Hero'
import lockPic from "./image.png"
import './login.scss'

const Login = () => {
  return (
    <div id='login'>
        <Hero text={"Login"}/>
        <div className="container">
          <div className="row">
            <img src={lockPic} alt="" />
            <form action="">
              <input type="email" placeholder='enter your email'/>
              <input type="password" placeholder='enter your password'/>
              <a href=""></a>
              <button>log in</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login