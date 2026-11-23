import React, { useState } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'

function Edit() {
  const [offcanvas , setOffcanvas] = useState(false)
  return (
    <div>
        {/* Button */}
      <button onClick={()=>setOffcanvas(true)} className='bg-black text-white p-2 rounded font-bold flex items-center border hover:bg-white hover:text-black cursor-pointer justify-center '><FaUserEdit className='text-2xl me-2'/> Edit</button>
      {/* off Canvas */}
     { offcanvas &&
      <div>
      <div className='bg-gray-500/75 inset-0 fixed w-full h-full'></div>
      <div className="bg-white h-full z-50 fixed w-90 top-0 left-0">
        {/* head */}
        <div className='flex justify-between items-center mb-5 bg-black text-white p-3 text-3xl'>
          <h1>Update user Profile</h1>
        <IoCloseSharp onClick={()=>setOffcanvas(false)} />
        </div>  
        {/* body */}
        <div className='flex justify-center items-center my-5 flex-col'>
          <label htmlFor="user-profile">
            <input type="file" id='user-profile' hidden />
            <img style={{height:'100px', width:'100px', borderRadius:'50%'}} src="https://img.magnific.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="userprofile" />
            <button style={{marginLeft:'70px', marginTop:'-25px'}} className='bg-black text-white px-2 py-2 rounded-2xl fixed'><FaPen /></button>
          </label>
          {/* username */}
          <div className='mt-10 mb-3 w-full '>
            <input type="text" placeholder='Username' className='w-full bg-gray-200 rounded-xl p-3' />
          </div>
          {/* password */}
          <div className=' mb-3 w-full '>
            <input type="text" placeholder='New Password' className='w-full bg-gray-200 rounded-xl p-3' />
          </div>
          {/* new password */}
          <div className=' mb-3 w-full '>
            <input type="text" placeholder='Confirm Password' className='w-full bg-gray-200 rounded-xl p-3' />
          </div>
          {/* bio */}
          <div className=' mb-3 w-full '>
            <input type="text" placeholder='Bio' className='w-full bg-gray-200 rounded-xl p-3' />
          </div>
          {/* Reset & Update */}
          <div className='flex justify-end w-full mt-5 px-5'>
          <button className='bg-yellow-600 px-5 py-2 rounded text-white font-bold '>Reset</button>
          <button className='bg-green-600 px-5 py-2 rounded text-white font-bold ms-3'>Update</button>
          </div>
        </div>
      </div>
</div>
}
    </div>
  )
}

export default Edit
