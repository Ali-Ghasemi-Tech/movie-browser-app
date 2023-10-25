import './index.css';
import MoviePage from './MoviePage';
import MainPage from './MainPage';
import { Route , Routes } from 'react-router-dom';


const API_URL = 'https://www.omdbapi.com?apikey=46cefbd4';

function App() {
  return (
      <Routes>
        <Route index element={<MainPage />} />
        <Route  path='/mainPage' element = {<MainPage />} />
        <Route path="/moviePage/:imdbID" element={<MoviePage />} />
          {/* <Route  path=':imdbID' element = {<MoviePage />}/>
        </Route> */}
      </Routes> 
      
  
  );
}

export default App;
