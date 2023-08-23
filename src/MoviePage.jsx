
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const API_URL = 'http://www.omdbapi.com?apikey=46cefbd4';


const MoviePage = () => {      
    const location = useLocation();
    const {movie} = location.state;
    const [data , setData] = useState({});

    const loadMovie = async (id) => {
        const response = await fetch(`${API_URL}&i=${id}&plot=full`);

        const info = await response.json();

        setData(info);
    }

      useEffect(() => {
        loadMovie(movie.imdbID);

      },[] )
    

    return(
        <>
            <body className="flex justify-center items-center bg-indigo-900 min-h-screen w-screen">
                <div className="flex justify-between bg-gray-500 w-[1600px] h-[700px] rounded-xl">
                    <div className="ml-16 mt-10 h-full">
                        <div className="flex flex-col gap-3 mb-10">
                            <h1 className="text-5xl text-yellow-600">{data.Title}</h1>
                            <h2 className="text-2xl text-yellow-600 opacity-70">{data.Year}</h2>
                        </div>
                        
                        <div className="flex flex-col gap-3 w-[1000px] text-xl bg-clip-text bg-gradient-to-r from-yellow-600 to-gray-300 text-transparent">
                            <span>director : {data.Director}</span>
                            <span>type : {data.Type}</span>
                            <span>Rated : {data.Rated}</span>
                            <span>release date : {data.Released}</span>
                            {
                                data?.Type === 'movie' ? <span>movie duration : {data.Runtime} </span> : <span>duration of each episode : {data.Runtime}</span>
                            }
                            <span>Genre : {data.Genre}</span>
                            <span>Writers : {data.Writer}</span>
                            <span>Actors : {data.Actors}</span>
                            <span >story :</span>
                            <span className=" line-clamp">{data.Plot}</span>
                            
                        </div>
                    </div>

                    <div className="h-full mx-3 flex items-center w-[450px]">
                        <img className="h-[95%] rounded-xl" src={data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/400'} alt={data.Title} />
                    </div>
                </div>
                
            </body>
        </>
        
    )
}

export default MoviePage;
