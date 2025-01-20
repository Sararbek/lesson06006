import React from 'react'

const CategoryLoading = () => {

    const loadingLimit = 10

  return (
    <div className={`grid grid-cols-10 gap-4`}>
        {
            Array(loadingLimit).fill().map((_, inx) => (
                <div key={inx} className='h-9 rounded bg-[#efefef] to-left'></div>
            ))
        }
    </div>
  )
}

export default CategoryLoading