import React from 'react'

function Preloader() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img className='w-screen h-screen'  src="../public/preloader.gif" alt="preloader" />
    </div>
  )
}

export default Preloader
