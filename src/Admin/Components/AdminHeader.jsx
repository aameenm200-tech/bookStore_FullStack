import React from 'react'
import { FaPowerOff } from 'react-icons/fa6'

function AdminHeader() {
  return (
    <>
    <div className='flex justify-between items-center p-3 md:px-10'>
      {/* Header Top */}
      {/* logo */}
       <div className='flex items-center'>
          <img width={"100px"} height={"50px"} src="../public/logo.png" alt="logo" />
          <h1 className='text-2xl  font-bold'>BOOK STORE</h1>
        </div>
        {/* logout */}
        <button className='bg-black text-white px-3 py-2 rounded flex items-center hover:bg-red-600 font-bold'>Logout <FaPowerOff className='ms-2'/></button>
        </div>
      {/* header Marque */}
      <div className='bg-black text-white p-3'>
       <marquee> Welcome Admin, You're all set to manage and monitor the system. let's get into work!!! </marquee> 
      </div>
    </>
  )
}

export default AdminHeader
