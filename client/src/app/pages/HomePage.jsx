import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import MovieCard from '../../components/MovieCard'

const HomePage = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:5000/get-movies')
                console.log(res.data)
                setData(res.data)
            } catch (error) {
                alert(`Error in fetching data: ${error}`)
            }
        }
        getMovies()
    }, [])

    const filteredMovies = data.filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase())
    ))

  return (
    <div >
      {/* Title */}
      <div className="flex justify-between mt-5 items-center mx-10">
        <h1 className='text-blue-700 text-4xl m-4 font-mono'>MovieBlue</h1>
        <input type="text" placeholder='Search movies here' value={query}
            className='bg-gray-200 p-2 w-1/4 h-14 px-10 rounded-4xl mr-20'
            onChange={(e) => setQuery(e.target.value)}
        />
        <i className='fa fa-search absolute left-300 top-12' style={{fontSize: 20}}></i>
        <Link to='/'><i className='fa fa-heart text-red-400' style={{fontSize: 30}}></i></Link>

      </div>

      <h1 className='ml-5 mt-20 underline text-xl'>Movies</h1>
      {/* movie render */}
      <div className="grid grid-cols-5 m-5 gap-10">
        { filteredMovies.length > 0 ? (
          filteredMovies.map(item => (
            <Link to='/'>
              <MovieCard key={item.id} item={item}  />
            </Link>
          ))
        ) : <p>No data found</p> }
      </div>


    </div>
  )
}

export default HomePage
