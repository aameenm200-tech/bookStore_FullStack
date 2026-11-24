import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img src="https://cdn.dribbble.com/userupload/23788978/file/original-56bc17318a8b3c5f15a378c9ea63983e.gif" alt="" />
      <p>The page you are looking for is not available</p>
      <Link to={'/'} className='bg-black text-white p-2 rounded'>Home</Link>
    </div>
  )
}

export default PageNotFound
