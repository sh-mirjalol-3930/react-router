import React from 'react'
import Hero from '../../components/hero/Hero'
import UsersCom from '../../components/users/UsersCom'

const Users = () => {
  return (
    <div id='users'>
        <Hero text={"Users"}/>
        <UsersCom/>
    </div>
  )
}

export default Users