import React from "react";
import MovieCard from "./MovieCard";
import MoviePage from './MoviePage';
import App from './App';
import './index.css';
import SearchIcon from "./search.svg";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const API_URL = 'http://www.omdbapi.com?apikey=46cefbd4';

const MainPage = () => {

  const [movies ,setMovies] = useState([]);
  const [searchTerm , setSearchTerm] =useState('');

  const searchMovie = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();
    console.log(data);

    setMovies(data.Search);

  }

 


  useEffect(() => {

    searchMovie('batman');

  } , []);

  const movie1 = 
    {"Title":"Batman Begins","Year":"2005","Rated":"PG-13","Released":"15 Jun 2005","Runtime":"140 min","Genre":"Action, Crime, Drama","Director":"Christopher Nolan","Writer":"Bob Kane, David S. Goyer, Christopher Nolan","Actors":"Christian Bale, Michael Caine, Ken Watanabe","Plot":"When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia, where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as \"Batman\". But it doesn't stay quiet for long.","Language":"English, Mandarin","Country":"United States, United Kingdom","Awards":"Nominated for 1 Oscar. 14 wins & 79 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"8.2","imdbVotes":"1,517,479","imdbID":"tt0372784","Type":"movie","DVD":"09 Sep 2009","BoxOffice":"$206,863,479","Production":"N/A","Website":"N/A","Response":"True"}

    return(
        <>
        <body className='bg-gray-900 flex flex-col items-center pt-32 min-h-screen'>
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
              movies.map((movie) => {
                
                return (
                
                <Link to='/moviePage' element={<MoviePage />}>
                  <MovieCard movie = {movie} /> 
                </Link>)
              })
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