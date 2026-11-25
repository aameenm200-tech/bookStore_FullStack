import React, { useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminResources() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        {/* 1st section 1-grid */}
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        {/* 2nd section 4-grid */}
        <div className='col-span-4 p-10'>
          <h1 className='text-2xl font-bold my-10 text-center'>All Resources</h1>
          <div className='flex justify-center items-center my-8 font-bold text-lg'>
            <p onClick={() => setCurrentTab(1)} className={currentTab == 1 ? 'p-3 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl' : 'p-3 border-gray-300 border-b cursor-pointer rounded'}>Books</p>
            <p onClick={() => setCurrentTab(2)} className={currentTab == 2 ? 'p-3 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl' : 'p-3 border-gray-300 border-b cursor-pointer rounded'}>Users</p>
          </div>
          {/* tab content */}
          {
            currentTab == 1 &&
            <div className='md:grid grid-cols-4 w-full my-10'>
              {/* duplicate according to books */}
              <div className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zYoVQIZZPOvu-q66hse9IuyzZxiqOOM7HW10zLtkJ5_RHVT9EPcvVA0D&s=10" alt="book" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h2 className='text-xl font-bold text-blue-700'>Author</h2>
                  <h3 className='text-lg font-bold text-xl'>Title</h3>
                  <p className='font-bold text-red-500'>Price</p>
                  <button className='bg-green-600 text-white p-2 rounded w-full'>Approve</button>
                </div>
              </div>
            </div>
          }
          {
            currentTab == 2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate according to the users  */}
              <div className='rounded-xl bg-green-100 p-5 m-2'>
                <p className='text-red-500 font-bold text-md'>ID:</p>
                <div className='flex items-center mt-3'>
                  <img style={{ height: '60px', width: '60px', borderRadius: '50%' }} src="https://img.magnific.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
                  <div className='flex flex-col w-full ms-5'>
                  <h1 className='text-red-400 text-md font-bold'>Username</h1>
                  <p className='text-sm'>username@gmail.com</p>
                </div>
                </div>
                
              </div>
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminResources
