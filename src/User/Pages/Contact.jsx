import React from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { FiSend } from 'react-icons/fi'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center font-bold text-3xl my-5'>CONTACT</h1>
        <p className='text-justify '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt qui, quos nam quia cumque, veritatis odit magnam veniam iusto vel voluptatum dignissimos earum vero voluptatibus voluptas animi esse illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et magni repudiandae, possimus natus est sequi ipsa aliquid aspernatur impedit quibusdam iure doloremque eaque nesciunt numquam provident porro, reprehenderit molestiae non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates voluptas quis officia earum quisquam delectus commodi ullam unde assumenda natus? Recusandae id, fugit dicta ipsam ea laudantium. A, error voluptatem.</p>

        {/* contact details */}
        <div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0'>
          {/* location */}
          <div className='flex items-center'>
            <div style={{ height: '50px', width: '50px', borderRadius: '50%' }} className=' flex justify-center items-center bg-gray-300'>
              <FaLocationDot className='text-xl' />
            </div>
            <p className='ms-5'>
              123 Main Street, Apt 48, Anytown, CA 91234
            </p>
          </div>
          {/* number */}
          <div className='flex items-center'>
            <div style={{ height: '50px', width: '50px', borderRadius: '50%' }} className=' flex justify-center items-center bg-gray-300'>
              <FaPhone className='text-xl' />
            </div>
            <p className='ms-5'>
              +09874563211
            </p>
          </div>
          {/* email */}
          <div className='flex items-center'>
            <div style={{ height: '50px', width: '50px', borderRadius: '50%' }} className=' flex justify-center items-center bg-gray-300'>
              <FaEnvelope className='text-xl' />
            </div>
            <p className='ms-5'>
              contact@bookstore.com
            </p>
          </div>
        </div>
        {/* Message & Map */}
        <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40 '>
          {/* Message */}
          <div className='bg-gray-300 text-center p-5 rounded'>
            <h1 className='text-2xl font-semibold my-3 '>Send Us Message!</h1>
            <form>
              <div className='mb-5 mt-10'>
                <input type="text" placeholder='Name' className='w-full bg-white p-3 rounded' />
              </div>
              <div className='mb-5'>
                <input type="email" placeholder='E Mail' className='w-full bg-white p-3 rounded' />
              </div>
              <div className='mb-5'>
                <textarea type="text" placeholder='Message' className='w-full bg-white p-3 rounded' />
              </div>
              <div className='my-5'>
                <button className='bg-black p-3 rounded text-white flex justify-center items-center w-full'>Submit<FiSend className='ms-3 text-xl' /></button>
              </div>
            </form>
          </div>
          {/* map */}
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.975217565075!2d76.3400676747941!3d10.01890359008765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Software%20Training%20institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1795065790680!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
