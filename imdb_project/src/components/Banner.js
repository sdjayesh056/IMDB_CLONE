import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[50vh] bg-cover bg-center flex items-end' style={{
        backgroundImage: `url(https://i0.wp.com/thecinemafiles.com/wp-content/uploads/2017/02/John-Wick-2-Banner.jpg?fit=992%2C500&ssl=1)`
    }}>
        <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-50 p-4 text-white text-center w-full'>
            JOHN WICK
        </div>

    </div>
  )
}

export default Banner