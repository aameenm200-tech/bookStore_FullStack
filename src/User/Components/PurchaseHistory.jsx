import React from 'react'

function PurchaseHistory() {
  return (
     <div className='p-30 my-15 shadow rounded'>
            {/* duplicate book status */}
            <div className='bg-gray-100 rounded p-5 mt-5'>
                <div className='md:grid grid-cols-[3fr_1fr]'>
                    {/* 1st section */}
                    <div className='px-4'>
                        <h1 className='text-2xl font-semibold'>Book Title</h1>
                        <h1 className='text-xl font-semibold'>Author Name</h1>
                        <h1 className='text-xl font-medium text-blue-600'>$ price</h1>
                        <p className='text-large font-bold mt-4 '>Abstract :</p>
                        <div className='flex mt-10'>
                            <img width={'120px'} style={{ height: '120px' }} src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="purchase" />
                            
                        </div>
                    </div>
                    {/* 2nd Section */}
                    <div className='px-5 mt-5 md:mt-0'>
                        <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zYoVQIZZPOvu-q66hse9IuyzZxiqOOM7HW10zLtkJ5_RHVT9EPcvVA0D&s=10" alt="" />
                    </div>

                </div>
            </div>
        </div>
  )
}

export default PurchaseHistory
