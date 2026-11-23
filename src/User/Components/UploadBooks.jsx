import React from 'react'

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
                            <img style={{ height: '300px', borderRadius: '50%' }} src="https://www.pngall.com/wp-content/uploads/2/Upload-Transparent.png" alt="Upload Book" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadBooks
