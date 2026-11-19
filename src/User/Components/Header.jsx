import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      {/* Header Top part */}

      <div className='grid grid-cols-3 p-2'>
        {/* logo */}
        <div className='flex items-center'>
          <img width={"100px"} height={"50px"} src="../public/logo.png" alt="logo" />
          <h1 className='text-2xl ms-3 font-bold md:hidden'>BOOK STORE</h1>
        </div>

        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BOOK STORE</h1>
        </div>
        {/* login */}
        <div className='md:flex items-center justify-end hidden text-2xl'>
          <FaInstagram />
          <FaSquareXTwitter className='mx-2' />
          <FaFacebookSquare />
          <Link to={'/login'} className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:bg-black hover:text-white '> <CiUser className='me-2' />Login</Link>
        </div>
      </div>


      {/* navigation part */}
      <nav className='bg-black w-full text-white md:flex justify-center items-center p-3'>
        <div className='flex justify-between items-center text-2xl md:hidden '>
          <button onClick={() => setToggle(!toggle)}><FaBars className='text-3xl' /></button>
          <Link to={'/login'} className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:bg-white hover:text-black '> <CiUser className='me-2' />Login</Link>

        </div>
        <ul className={toggle ? 'flex flex-col' : 'md:flex hidden gap-10'}>
          <li> <Link to={'/'} className=''>HOME</Link></li>
          <li><Link to={'/books'} className=''>BOOKS</Link></li>
          <li><Link to={'/contact'}>CONTACT</Link></li>

        </ul>

      </nav>
    </>
  )
}

export default Header
