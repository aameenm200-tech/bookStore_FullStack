import React, { useState } from 'react'
import { FaEyeSlash, FaUser } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Auth({ insideRegister }) {
  const [togglePassword, setTogglePassword] = useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(login.png)] bg-cover bg-center'>
      <div className='p-10'>
        <h1 className='font-bold text-3xl text-center text-white'>BOOKSTORE</h1>
        <div style={{ width: '400px' }} className='bg-black/70 backdrop-blur-sm rounded-2xl text-white flex justify-center items-center flex-col my-5 p-5'>
          <div style={{ height: '90px', width: '90px', borderRadius: '50%' }} className=' border mb-5 flex flex-col justify-center items-center'>
            <FaUser className='text-5xl' />
          </div>
          <h1 className='text-2xl'>{insideRegister ? "Register" : "Login"}</h1>
          <form className='w-full'>
            {/* username */}
            {
              insideRegister &&
              <input type="text" placeholder='Username' className='text-black bg-white p-2 rounded-xl w-full mt-5' />
            }
            {/* email */}
            <input type="email" placeholder='E Mail' className='text-black bg-white p-2 rounded-xl w-full my-5' />
            {/* password */}
            <div className="flex items-center">
              <input type={togglePassword ? "text" : "password"} placeholder='Password' className='text-black bg-white p-2 rounded-xl w-full mb-5' />
              {
                togglePassword ?
                  <FaEyeSlash onClick={() => setTogglePassword(!togglePassword)} className='text-gray-500 cursor-pointer text-xl' style={{ marginLeft: '-30px', marginTop: '-20PX' }} />
                  :
                  <FaEye onClick={() => setTogglePassword(!togglePassword)} className='text-gray-500 cursor-pointer text-xl' style={{ marginLeft: '-30px', marginTop: '-20PX' }} />
              }
            </div>
            {/* forgot password */}
            <div className='flex justify-between mb-5'>
              <p className='text-xs text-orange-300'>*Never share your passsword with others.</p>
              {
                !insideRegister &&
                <button className='text-xs underline text-blue-500'>Forgot PAssword</button>
              }
            </div>
            {/* login / register button */}
            <div className=' my-5 text-center'>
              {
                insideRegister ?
                  <button className='bg-blue-500 w-full p-2 rounded-xl'>Register</button>
                  :
                  <button className='w-full bg-blue-500 p-2 rounded-xl'>Login</button>
              }
            </div>
            {/* Google Authentication */}
           {
            !insideRegister &&
            <div className='text-center my-5'>
              <p>---------------------OR---------------------</p>
              <div className='flex justify-center items-center w-full mt-2'>
                Google Authentication
              </div>
            </div>
           }
           {/* new or already user */}
           <div className='text-center'>
            {
              insideRegister?
              <p>Existing User? <Link to={'/login'} className='underline ms-4 text-blue-500'>Login</Link></p>
              :
              <p>New User? <Link to={'/register'} className='underline ms-4 text-blue-500'>Register</Link></p>
            }

           </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
