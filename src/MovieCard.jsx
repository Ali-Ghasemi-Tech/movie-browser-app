import React from 'react'

const MovieCard = ({ movie1 }) =>  {
    return(
        <div className='flex flex-col relative rounded-3xl'>

            <div className=' absolute left-3 top-3'>
              <p className='text-white opacity-50'>
                {movie1.Year}
              </p>
            </div>

            <div>
              <img className=' rounded-xl' src={movie1.Poster} alt="" />
            </div>

            <div className=' bg-gray-600 absolute bottom-0 inset-x-0 pl-5 gap-5 py-5 rounded-b-xl'>
              <span className='text-lg text-white opacity-60'>
                {movie1.Type}
              </span>
              <h1 className='text-2xl text-indigo-500 font-bold'>
                {movie1.Title}
              </h1>
            </div>
          </div>
    );
}


export default MovieCard;