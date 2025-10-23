import React from 'react'

export default function FlashSale() {
    return (
        <div className='mt-12' >
            <div className='max-w-11/12 mx-auto bg-white p-8 rounded-xl shadow-lg'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 '>
                        <h1 className='text-4xl font-extrabold'>Flash Sale</h1>
                        <p className='bg-red-400   rounded-full h-fit px-2 py-1 italic font-semibold text-white'>Limited time</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='font-semibold'>End Time: </p>
                        <div>
                            <span className='bg-black text-white px-2 py-1 rounded-md'>02</span> :

                            <span className='bg-black text-white px-2 py-1 rounded-md ml-1'>15</span> :

                            <span className='bg-black text-white px-2 py-1 rounded-md ml-1'>45</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
