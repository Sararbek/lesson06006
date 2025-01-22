import React from 'react'

const Loading = () => {

    const limit = 10

  return (
    <div className='grid grid-cols-5 gap-x-5 gap-y-8'>
        {
            Array(limit).fill().map((_, inx) => (
                <div key={inx} className='rounded-lg overflow-hidden'>
                    <div className='to-left w-full h-[310px] bg-[#efefef] rounded-b-lg'></div>
                    <div className='pt-3 px-2 pb-2 flex flex-col gap-1 min-h-[130px]'>
                        <div className='to-left w-[90%] h-4 bg-[#efefef]'></div>
                        <div className='to-left w-[60%] h-4 bg-[#efefef]'></div>
                        <div className='to-left w-[60%] h-4 bg-[#efefef]'></div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Loading