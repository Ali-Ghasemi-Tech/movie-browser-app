import React from "react";
import MovieCard from "./MovieCard";
import MoviePage from './MoviePage';
import App from './App';
import './index.css';
import SearchIcon from "./search.svg";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const API_URL = 'https://www.omdbapi.com?apikey=46cefbd4';

const MainPage = () => {

  const [movies ,setMovies] = useState([]);
  const [searchTerm , setSearchTerm] =useState('');

  const searchMovie = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);

  }

 


  useEffect(() => {

    searchMovie('ted');

  } , []);

    return(
        <>
        <body className=' bg-indigo-950 flex flex-col items-center pt-32 min-h-screen'>
          <h1 className='text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-10'>Movie Land
          </h1>

        <div className='flex justify-between border border-indigo-500 rounded-full pr-5 w-[80%] h-[60px] pl-6 shadow-lg shadow-gray-700' >
          <input className='text-gray-400 bg-transparent text-xl w-full h-full focus:outline-none' type="text"
          placeholder='write your movie title here'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          />

          <img className='py-3 hover:cursor-pointer'
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            searchMovie(searchTerm);
          }}
            />
        </div>
        
        {
          movies?.length > 0 
          ? (
            <div  className='flex flex-wrap justify-center w-[85%] py-10 gap-14 '>


            {
            movies.map((movie) => (
              <Link
                key={movie.id}
                to={`/moviePage/${movie.id}`}
                state = {{ movie : movie }}
              >
                <MovieCard movie={movie} /> 
              </Link>
            ))
            }


            </div>
          ) :
          <div className='flex justify-center items-center w-full h-full mt-20 text-2xl text-indigo-300'>
            <h2>no movies found</h2>
          </div>
        }

      </body>

      </>
      
    )
}

export default MainPage;