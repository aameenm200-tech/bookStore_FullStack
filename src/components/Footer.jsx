import React from 'react'
import { FaArrowRight, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';
 import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-3 md:gap-10 bg-black text-white p-10'>
        {/* about us */}
        <div>
          <h1 className='font-bold'>About Us</h1>
          <p className='mt-5 text-justify'>We believe books are more than just pages - they are windows into new world, teachers of wisdom, and companion for life. Our journey began with a passion for storytelling and a mission to make reading accessible, enjoyable, and inspiring for everyone . </p>
        </div>
        {/* News letter */}
        <div className='flex flex-col md:mt-0 mt-5'>
          <h4 className='font-bold'>News Letter</h4>
          <p className='my-5'>Stay updated with our latest trends</p>
          <div className='flex'>
            <input type="text" placeholder='E mail' className='border bg-white p-2 text-black' />
            <button className='bg-yellow-500 p-2'> <FaArrowRight /></button>
          </div>
        </div>
        {/* Follow Us */}
        <div className='flex flex-col md:mt-0 mt-5'>
          <h4 className='font-bold'>Follow Us</h4>
          <p className='my-5'>Let us be social</p>
          <div className='flex text-2xl'>
            <FaInstagram />
            <FaSquareXTwitter className='mx-5'/>
            <FaFacebookSquare />
            <FaEnvelope className='mx-5'/>
          </div>
          </div>
      </div>

    </>
  )
}

export default Footer
