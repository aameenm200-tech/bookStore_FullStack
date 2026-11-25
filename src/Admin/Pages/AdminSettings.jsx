import React from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaPen } from 'react-icons/fa6'

function AdminSettings() {
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
          <h1 className='text-3xl font-semibold text-center mb-10 '>Settings</h1>
          <div className='md:grid grid-cols-2 items-center'>
            {/* 1st section */}
            <div>
              <h1 className='text-2xl font-semibold'>Welcome, Admin 👋</h1>
              <p className='my-3 text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
              <h1 className='my-5 font-bold text-xl'>🔧 What You Can Manage in This Section:</h1>
              <ul>
                <li>✏️ Update personal details (name, email, role, profile picture) </li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access level </li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>
              <p className='my-10 text-justify'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>

            </div>
            {/* 2nd section */}
            <div className='bg-green-100 m-10 rounded-2xl'>
<div className='flex justify-center items-center my-5 p-10 flex-col'>
          <label htmlFor="user-profile">
            <input type="file" id='user-profile' hidden />
            <img style={{height:'100px', width:'100px', borderRadius:'50%'}} src="https://img.magnific.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="userprofile" />
            <button style={{marginLeft:'60px', marginTop:'-25px'}} className='bg-black text-white px-2 py-2 rounded-2xl '><FaPen /></button>
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
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
