import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data =useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Rohanjundare2000')
    //     .then(Response=>Response.json)
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-slate-500 text-white p-4 text-3xl'>
      Github Follower:{data.followers}
      <img src={data.avertar_url} alt="Git picture" width={300}></img>
    </div>
  )
}

export default Github

export const githubLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Rohanjundare2000')
    return response.json()
}