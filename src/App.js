import './index.css';
import MoviePage from './MoviePage';
import MainPage from './MainPage';
import { Route , Routes } from 'react-router-dom';

//46cefbd4
// API_URL &t="title"&y="year of the movie"&plot=full;
const API_URL = 'http://www.omdbapi.com?apikey=46cefbd4';

function App() {

  
  const movie1 = 
    {"Title":"Batman Begins","Year":"2005","Rated":"PG-13","Released":"15 Jun 2005","Runtime":"140 min","Genre":"Action, Crime, Drama","Director":"Christopher Nolan","Writer":"Bob Kane, David S. Goyer, Christopher Nolan","Actors":"Christian Bale, Michael Caine, Ken Watanabe","Plot":"When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia, where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as \"Batman\". But it doesn't stay quiet for long.","Language":"English, Mandarin","Country":"United States, United Kingdom","Awards":"Nominated for 1 Oscar. 14 wins & 79 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"8.2","imdbVotes":"1,517,479","imdbID":"tt0372784","Type":"movie","DVD":"09 Sep 2009","BoxOffice":"$206,863,479","Production":"N/A","Website":"N/A","Response":"True"}


  return (
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/mainPage' element = {<MainPage />} />
        <Route path='/moviePage' element = {<MoviePage />}/>
      </Routes> 
      
  
  );
}

export default App;

