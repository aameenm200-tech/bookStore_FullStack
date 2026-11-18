import React from 'react'
import { FaUser } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'

function Auth({insideRegister}) {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(landing.png)] bg-cover bg-center'>
      <div className='p-10'>
        <h1 className='font-bold text-3xl text-center'>BOOKSTORE</h1>
        <div style={{ width: '400px' }} className='bg-black/20 backdrop-blur-sm rounded-xl text-black flex justify-center items-center flex-col my-5 p-5'>
          <div style={{ height: '80px', width: '80px', borderRadius: '50%' }} className=' border mb-5 flex flex-col justify-center items-center'>
            <FaUser className='text-3xl' />
          </div>
          <h1 className='text-2xl'>{insideRegister?"Register" : "Login"}</h1>
          <form className='w-full'>
            {/* username */}
            {
              insideRegister && 
              <input type="text" placeholder='Username' className='text-black bg-white p-2 rounded-xl w-full my-5' />
            }
            {/* email */}
             <input type="email" placeholder='E Mail' className='text-black bg-white p-2 rounded-xl w-full mb-5' />
            {/* password */}
            <div className="flex items-center">
             <input type="password" placeholder='Password' className='text-black bg-white p-2 rounded-xl w-full mb-5' />
             <FaEye className='text-gray-500 cursor-pointer text-xl' style={{marginLeft:'-30px' , marginTop:'-20PX'}}/>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
