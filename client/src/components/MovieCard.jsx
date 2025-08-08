import React from 'react'

const MovieCard = ({ item }) => {
  return (
    <div className='w-80 border-1 border-blue-300 bg-blue-100 p-4 rounded-2xl flex flex-col items-center-safe
        hover:scale-102 transition-all duration-200 delay-75
    '>
        <img src={item.image} alt={item.name} className='w-60 rounded-xl h-90' />
        <div className="w-full mt-1 p-2">
            <p className='text-center font-bold mb-1 underline'>{item.title}</p>
            <p><span className='font-semibold ml-2'>Plot: </span>{item.description}</p>
            <p><span className='font-semibold ml-2'>Release year: </span>{item.release_date}</p>
            <p><i className='fa fa-star text-yellow-500 ml-2'></i><span className='ml-2 font-semibold'>Rating: </span>{item.rating}</p>
        </div>
    </div>
  )
}

export default MovieCard