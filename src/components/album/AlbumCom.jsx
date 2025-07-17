import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './album.scss'

const API = 'https://jsonplaceholder.typicode.com/'


const AlbumCom = () => {

  const[albums, setAlbum] = useState([]);
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    axios
        .get(`${API}/albums`)
        .then((res)=>{
          console.log(res.data);
          setAlbum(res.data)
        })
        .catch((err)=>{
          setError(err.message);
        })
        .finally(()=> setLoading(false));
  },[]);

  if (loading) return <div className='container msg'>Loading...</div>;
  if (error) return <div className='container msg'>somthing  went wrong :( {error}</div>;


  return (
    <div className='container album'>
        <div className="wrp">
        {albums.map((item)=>(
          <div className='card'>
            <b>{item.id}</b>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlbumCom