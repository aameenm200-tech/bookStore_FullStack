import React from 'react'
import { FaChartSimple, FaDatabase, FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-green-100 md:min-h-screen py-10'>
      {/* image */}
      <div className='flex justify-center'>
        <img style={{ height: '100px ', width: '100px', borderRadius: '50%' }} src="https://img.magnific.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
      </div>
      {/* name */}
      <h1 className='text-2xl font-semibold text-center my-5'>Admin</h1>
      {/* Link */}
      <div className='flex flex-col justify-center items-center'>
        <div className='mt-5'>
          <Link to={'/admin'} className='flex items-center'><FaChartSimple className='me-3 text-2xl'/> Dashboard</Link>
        </div>
        <div className='mt-5'>
          <Link to={'/admin/resources'} className='flex items-center'><FaDatabase className='me-3 text-xl'/> Collections</Link>
        </div>
        <div className='mt-5'>
          <Link to={'/admin/settings'} className='flex items-center'><FaGears className='me-3 text-2xl'/> Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
