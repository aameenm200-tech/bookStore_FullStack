import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBooks() {
    return (
        <div className='bg-gray-100 p-10 my-30 mx-20'>
            <h1 className='text-center text-3xl font-semibold'>Upload Book Details</h1>
            <div className='md:grid grid-cols-2 mt-15 w-full'>
                {/* 1st section */}
                <div className='px-5'>
                    <div className='mb-3'>
                        <input type="text" placeholder='Book Title' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Book Cover URL Image' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Total Pages' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Orginal Price' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Discount Price' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <textarea rows={5} type="text" placeholder='Abstract' className='w-full p-2 bg-white rounded' />
                    </div>
                </div>
                {/* 2nd section */}
                <div className='px-5'>
                    <div className='mb-3'>
                        <input type="text" placeholder='Publisher' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded' />
                    </div>
                    {/* Upload Secttion */}
                    <div className='my-10 flex justify-center items-center'>
                        <label htmlFor="book-images">
                            <input type="file" id='book-images' hidden />
                            <img style={{ height: '300px', width: '300px', borderRadius: '50%' }} src="https://www.pngall.com/wp-content/uploads/2/Upload-Transparent.png" alt="Upload Book" />
                        </label>
                    </div>
                    {/* preview uploaded images */}
                    <div className='flex justify-center items-center mb-3'>
                        <img width={'70px'} height={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zYoVQIZZPOvu-q66hse9IuyzZxiqOOM7HW10zLtkJ5_RHVT9EPcvVA0D&s=10" alt="Bookscard" />
                        <label htmlFor="bookupload">
                            <input type="file" id='bookupload' hidden />
                            <FaPlus className='text-2xl ms-3'/>
                        </label>

                    </div>
                </div>
            </div>
            {/* reset & add books */}
            <div className='flex md:justify-end mt-10 px-5 justify-center'>
                <button className='bg-yellow-600 p-2 rounded font-bold text-white hover:bg-white hover:text-yellow-500 border'>Reset</button>
                <button className='bg-green-600 p-2 rounded font-bold text-white ms-5 hover:text-green-500 hover:bg-white border'>Add Book Details </button>
            </div>
        </div>
    )
}

export default UploadBooks
