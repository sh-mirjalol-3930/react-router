import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './coments.scss'

const API = 'https://jsonplaceholder.typicode.com/'


const Coment = () => {

    const[comments, setComment] = useState([]);
        const[error, setError] = useState(null);
        const[loading, setLoading] = useState(true);
      
        useEffect(()=>{
          setLoading(true);
          axios
              .get(`${API}/comments`)
              .then((res)=>{
                console.log(res.data);
                setComment(res.data)
              })
              .catch((err)=>{
                setError(err.message);
              })
              .finally(()=> setLoading(false));
        },[]);
      
        if (loading) return <div className='container msg'>Loading...</div>;
        if (error) return <div className='container msg'>somthing  went wrong :( {error}</div>;


  return (
    <div className='container coment'>
        <div className="wrp">
        {comments.map((item)=>(
          <div className='card'>
            <p className='emailp'>{item.email}</p>
            <b>{item.name}</b>
            <div>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coment