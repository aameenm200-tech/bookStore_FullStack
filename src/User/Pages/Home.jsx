import React from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'

function Home() {
  return (
    <>
    <Header/>
      {/* Hero Section */}
      <div style={{height:"600px"}} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
      <div style={{height:"600px",backgroundColor:"rgba(0,0,0,0.3)"}} className='w-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-6xl'>Wonderful Gifts </h1>
        <p>Gift your family and friend a book</p>
        <div className='mt-9 flex items-center'>
          <input type="text" placeholder='Search a book' className='bg-white p-2 rounded-3xl text-black w-100' />
          <FaSearch className='text-2xl text-gray-500 cursor-pointer' style={{marginLeft:"-40px"}} />
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home
