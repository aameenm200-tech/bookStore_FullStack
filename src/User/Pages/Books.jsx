import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Books() {
  const [toggleFilter, setToggleFilter] = useState(false)
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='font-bold text-3xl my-5'>All Books</h1>
        <div className='my-5'>
          <input type="text" className='border border-gray-300 w-100 p-2 rounded-xl ' placeholder='search by book title' />
          <button className='bg-blue-600 p-2 rounded-xl text-white ms-3'>Search</button>
        </div>
      </div>
      {/* Grid Filter and books card */}
      <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
        {/* Filter */}
        <div className='cols-span-1'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-2xl'>Filter</h1>
            <button onClick={() => setToggleFilter(!toggleFilter)} className='text-2xl md:hidden'> <FaBars /> </button>
          </div>
          {/* filter category */}
          <div className={toggleFilter ? 'hidden' : 'md:block'}>
            <div className='mt-3'>
              <input name='filtering' id='no-Filter' type="radio" />
              <label htmlFor="no-Filter" className='ms-2'>All</label>
            </div>
            {/* duplicate filter category */}
            <div className='mt-3'>
              <input name='filtering' id='Filter' type="radio" />
              <label htmlFor="Filter" className='ms-2'>Category</label>
            </div>

          </div>
        </div>
        {/* book card */}
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5'>
            {/* duplicate according to book */}
            <div className='shadow rounded p-3 m-4'>
              <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zYoVQIZZPOvu-q66hse9IuyzZxiqOOM7HW10zLtkJ5_RHVT9EPcvVA0D&s=10" alt="Bookscard" />
              <div className='flex flex-col justify-center items-center mt-3'>
                <h1 className='text-blue-700 font-bold text-xl'>Author</h1>
                <h2 className='text-lg mt-2 font-semibold'>Title</h2>
                <Link to={'/view/:id'} className='bg-blue-600 p-2 rounded-xl text-white font-bold mt-2'>View Book</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Books
