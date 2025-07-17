import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
// import Login from './pages/login/Login'
import Posts from './pages/posts/Posts'
import Comments from './pages/comments/Comments'
import Albums from './pages/albums/Albums'
import Todos from './pages/todos/Todos'
import Users from './pages/users/Users'
import Login from './pages/login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/commentary' element={<Comments/>}/>
        <Route path='/albums' element={<Albums/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<div className='notFound'> <div className="text"><h2>404</h2><p>not found</p></div></div>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
