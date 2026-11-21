import React from 'react'
import { FaUserEdit } from 'react-icons/fa'

function Edit() {
  return (
    <div>
        {/* Button */}
      <button className='bg-black text-white p-2 rounded font-bold flex items-center border hover:bg-white hover:text-black cursor-pointer justify-center '><FaUserEdit className='text-2xl me-2'/> Edit</button>
      {/* off Canvas */}
    </div>
  )
}

export default Edit
