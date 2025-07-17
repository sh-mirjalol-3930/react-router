import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './user.scss'

const API = 'https://jsonplaceholder.typicode.com/'


const UsersCom = () => {

    const[users, setUser] = useState([]);
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    axios
        .get(`${API}/users`)
        .then((res)=>{
          console.log(res.data);
          setUser(res.data)
        })
        .catch((err)=>{
          setError(err.message);
        })
        .finally(()=> setLoading(false));
  },[]);

  if (loading) return <div className='container msg'>Loading...</div>;
  if (error) return <div className='container msg'>somthing  went wrong :( {error}</div>;




  return (
    <div className='container user'>
        <div className="wrp">
        {users.map((item)=>(
          <div className='card'>
            <b>{item.name}</b>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{item.id}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersCom