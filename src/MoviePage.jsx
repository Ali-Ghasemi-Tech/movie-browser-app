import React from "react";

const API_URL = 'http://www.omdbapi.com?apikey=46cefbd4';


const MoviePage = () => {
    const movie1 = 
    {"Title":"Batman Begins","Year":"2005","Rated":"PG-13","Released":"15 Jun 2005","Runtime":"140 min","Genre":"Action, Crime, Drama","Director":"Christopher Nolan","Writer":"Bob Kane, David S. Goyer, Christopher Nolan","Actors":"Christian Bale, Michael Caine, Ken Watanabe","Plot":"When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia, where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as \"Batman\". But it doesn't stay quiet for long.","Language":"English, Mandarin","Country":"United States, United Kingdom","Awards":"Nominated for 1 Oscar. 14 wins & 79 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"8.2","imdbVotes":"1,517,479","imdbID":"tt0372784","Type":"movie","DVD":"09 Sep 2009","BoxOffice":"$206,863,479","Production":"N/A","Website":"N/A","Response":"True"}

    // const loadMovie = async (title) => {
    //     const response = fetch(`${API_URL}&t=${title}&plot=full`);

    //     const data = await response.json();
        
    // }

    return(
        <>
            <body className="flex justify-center items-center bg-indigo-900 min-h-screen w-screen">
                <div className="flex justify-between bg-gray-500 w-[1600px] h-[700px] rounded-xl">
                    <div className="ml-16 mt-10 h-full">
                        <div className="flex flex-col gap-3 mb-10">
                            <h1 className="text-5xl text-yellow-600">{movie1.Title}</h1>
                            <h2 className="text-2xl text-yellow-600 opacity-70">{movie1.Year}</h2>
                        </div>
                        
                        <div className="flex flex-col gap-3 w-[1000px] text-xl bg-clip-text bg-gradient-to-r from-yellow-600 to-gray-300 text-transparent">
                            <span>director : {movie1.Director}</span>
                            <span>type : {movie1.Type}</span>
                            <span>Rated : {movie1.Rated}</span>
                            <span>release date {movie1.Released}</span>
                            {
                                movie1?.Type === 'movie' ? <span>movie duration : {movie1.Runtime} </span> : <span>duration of each episode : {movie1.Runtime}</span>
                            }
                            <span>Genre : {movie1.Genre}</span>
                            <span>Writers : {movie1.Writer}</span>
                            <span>Actors : {movie1.Actors}</span>
                            <span >story :</span>
                            <span className=" text-ellipsis whitespace-normal overflow-hidden">{movie1.Plot}</span>
                            
                        </div>
                    </div>

                    <div className="h-full mx-3 flex items-center w-[450px]">
                        <img className="h-[95%] rounded-xl" src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>
                </div>
                
            </body>
        </>
        
    )
}

export default MoviePage;
