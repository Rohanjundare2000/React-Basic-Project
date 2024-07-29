import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='bg-slate-500 text-wrap px-2'>
      User:{userid}
    </div>
  )
}

export default User
