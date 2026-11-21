import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaEye } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
import { FaCameraRetro } from 'react-icons/fa'

function View() {
  const [modal,setModal] = useState(false)
  return (
    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className='border shadow border-gray-300 p-5'>
          {/* grid */}
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* image */}
            <div className='cols-span-1'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zYoVQIZZPOvu-q66hse9IuyzZxiqOOM7HW10zLtkJ5_RHVT9EPcvVA0D&s=10" alt="ViewBook" />
            </div>
            <div className='col-span-3'>
              <div className='flex justify-between'>
                <h3 className='text-2xl font-bold '>Title</h3>
                <button onClick={()=>setModal(true)}><FaEye /></button>
              </div>
              <h2 className='text-xl font-bold text-blue-500 mt-2'>Author</h2>
              <div className='md:grid grid-cols-3 my-10 gap-10'>
                <p className='font-bold'>Publisher :</p>
                <p className='font-bold'>Language :</p>
                <p className='font-bold'>No.of Pages :</p>
                <p className='font-bold'>Category :</p>
                <p className='font-bold'>ISBN :</p>
                <p className='font-bold'>Orginal Price :</p>
                <p className='font-bold'>Seller :</p>
              </div>
              <div className='my-4 md:my-10 '>
                <h4 className='font-bold text-xl'>Abstract :</h4>
              </div>
              <div className='flex justify-end'>
                <Link to={'/books'} className='bg-blue-600 text-white font-bold p-3 rounded-xl flex justify-center items-center'> <IoMdArrowBack className='me-2' />Back</Link>
                <button className='bg-green-600 text-white font-bold rounded-xl p-3 ms-3'>Buy $ 99</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        { modal &&
          <div onClick={()=>setModal(false)} className='relative z-10 overflow-y-auto '>
          <div className='bg-gray-500/75 fixed inset-0'>
            <div className='flex justify-center items-center min-h-screen'>
              <div className='bg-white rounded-2xl w-100 md:w-250'>
                {/* modal title */}
                <div className='bg-black text-white p-3 rounded-xl '>
                  <h1>Book Images</h1>
                </div>
                {/* modal Body */}
                <div className='relative p-5'>
                  <p className='text-blue-500 flex items-center'> <FaCameraRetro className='text-2xl me-2' />Camera Clicks of the Books</p>
                  <div className='flex flex-wrap my-5'>
                    {/* duplicate image */}
                    <img className='md:w-75 w-25 md:me-2 mb-3 md:mt-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zYoVQIZZPOvu-q66hse9IuyzZxiqOOM7HW10zLtkJ5_RHVT9EPcvVA0D&s=10" alt="clicksofbook" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default View
