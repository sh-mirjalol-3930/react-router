import React, { useEffect, useState } from 'react'
import './postsCom.scss'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/'

const PostsCom = () => {
  const[posts, setPost] = useState([]);
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    axios
        .get(`${API}/posts`)
        .then((res)=>{
          console.log(res.data);
          setPost(res.data)
        })
        .catch((err)=>{
          setError(err.message);
        })
        .finally(()=> setLoading(false));
  },[]);

  if (loading) return <div className='container msg'>Loading...</div>;
  if (error) return <div className='container msg'>somthing  went wrong :( {error}</div>;


  return (
    <div className='container postCom'>
      <div className="wrp">
        {posts.map((item)=>(
          <div className='card'>
            <b>{item.title}</b>
            <p>{item.body}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsCom