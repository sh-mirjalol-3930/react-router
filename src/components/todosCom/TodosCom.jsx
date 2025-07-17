import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./todos.scss"

const API = 'https://jsonplaceholder.typicode.com/'


const TodosCom = () => {

    const[todos, setTodos] = useState([]);
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    axios
        .get(`${API}/todos`)
        .then((res)=>{
          console.log(res.data);
          setTodos(res.data)
        })
        .catch((err)=>{
          setError(err.message);
        })
        .finally(()=> setLoading(false));
  },[]);

  if (loading) return <div className='container msg'>Loading...</div>;
  if (error) return <div className='container msg'>somthing  went wrong :( {error}</div>;



  return (
    <div className='container todos'>
        <div className="wrp">
        {todos.map((item)=>(
          <div className='card'>
            <b>{item.id}</b>
            <p>{item.title}</p>
            <p>{item.completed}</p>

          </div>
        ))}
      </div>

    </div>
  )
}

export default TodosCom