import React from 'react'
import Hero from '../../components/hero/Hero'
import pic from "./ChatGPT Image Jul 17, 2025, 11_29_59 AM.png"

const Home = () => {
  return (
    <div id='home'>
      <Hero text={"Home"}/>
      <div className="container">
        <div className="row">
        <div>
        <b>React’da Ko‘p Sahifali Sayt (Multi-Page Application) tushunchasi</b>
        <p>React aslida Single Page Application (SPA) hisoblanadi — barcha sahifalar bitta index.html orqali ishlaydi. Ammo React Router yordamida har xil URL’lar orqali turli komponentlarni ko‘rsatib, ko‘p sahifali ko‘rinish yaratish mumkin.</p>
        </div>
        <img src={pic} alt="" />
        </div>
      </div>
      {/* <Products/> */}
    </div>
  )
}

export default Home