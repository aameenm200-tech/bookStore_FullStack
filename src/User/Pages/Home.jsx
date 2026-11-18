import React from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div style={{ height: "600px" }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
        <div style={{ height: "600px", backgroundColor: "rgba(0,0,0,0.3)" }} className='w-full flex flex-col justify-center items-center'>
          <h1 className='font-bold text-6xl'>Wonderful Gifts </h1>
          <p>Gift your family and friend a book</p>
          <div className='mt-9 flex items-center'>
            <input type="text" placeholder='Search a book' className='bg-white p-2 rounded-2xl text-black w-100' />
            <FaSearch className='text-2xl text-gray-500 cursor-pointer' style={{ marginLeft: "-40px" }} />
          </div>
        </div>
      </div>
      {/* new arrivals  */}
      <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
        <h1 className='font-bold text-5xl '>New Arrivals</h1>
        <h1 className='my-5 text-2xl'>Explore Our Latest Collections</h1>
        <div className='md:grid grid-cols-4 w-full my-10'>
          {/* duplicate according to books */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zYoVQIZZPOvu-q66hse9IuyzZxiqOOM7HW10zLtkJ5_RHVT9EPcvVA0D&s=10" alt="book" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h2 className='text-xl font-bold text-blue-700'>Author</h2>
              <h3 className='text-lg font-bold text-xl'>Title</h3>
              <p className='font-bold text-red-500'>Price</p>
            </div>
          </div>
        </div>
        <div className='my-10'>
          <Link to={'/books'} className='bg-black text-white p-3 rounded-xl'>Explore More...</Link>
        </div>
      </section>
      {/* Authors */}
      <section className='md:grid grid-cols-2 my-5 items-center gap-10 pd-5 md:px-40'>
        <div className='text-center'>
          <h2 className='font-bold text-2xl'>FEATURED AUTHORS</h2>
          <h3 className='text-xl'>Captivates With Every Word</h3>
          <p className="text-justify my-5">Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
          <p className="text-justify font-bold ">Our Author Features include:</p>
          <p className="text-justify my-4"><span className='font-bold'>✨ Author Profiles :</span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>
          <p className="text-justify "><span className='font-bold'>📖 Published Works : </span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
          <p className="text-justify my-4"><span className='font-bold'>🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
        </div>
        <div className='p-5'>
          <img src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="author" />
        </div>
      </section>
      {/* Testimonials */}
      <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
        <h1 className='font-bold text-3xl '>TESTIMONIALS</h1>
        <h1 className='my-3 text-xl'>See What Others Are Saying</h1>
        <div className='flex flex-col my-5 justify-center items-center'>
          <img width={'200px'} height={'200px'} style={{borderRadius:"50%"}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="tsetimonial" />
          <h3 className='my-3'>Luthor King</h3>
          <p className='text-justify'>This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
        </div>
        
      </section>
      <Footer />
    </>
  )
}

export default Home
