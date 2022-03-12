import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import HeroSection from './Components/HeroSection';
import { useState } from 'react';

function App() {
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      {/* <Navbar movies={movies} setMovies={setMovies}/> */}
      {/* <Banner/> */}
      {/* <Movies/> */}
      <HeroSection loader={loader} setLoader={setLoader} movies={movies} setMovies={setMovies}/>
    </div>
  );
}

export default App;
