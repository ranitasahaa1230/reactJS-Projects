import axios from "axios";
import React, { useEffect, useState } from "react";

export default function HeroSection({loader,setLoader,movies,setMovies}) {
  const [inputText,setInputText]=useState("");

  const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a9530b16";

  const getMovies=async(title)=>{
    try{
      setLoader(true);
      const {
        data: { Search },
      } = await axios.get(`${URL}&s=${title}`);
      setLoader(false);
      setMovies(Search);
    }catch(err){
      setLoader(false);
      console.log("error", err.message)
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
        <div className='nav-flex'>
        <h1>Movies App</h1>
        <h2 className='nav-h'>Favourites</h2>
        <input type="text" placeholder='Search your favorite movies' value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
        <button onClick={()=>getMovies(inputText)}>Search</button>
    </div>

      <h1>Trending Movies</h1>
      {loader && <div>Loading...</div>}
      {movies.length>0 ? (
        <div className="movies-flex">
        {movies.map((movie) => (
          <div className="movies-card" key={movie.imdbID}>
            {movie.Poster !== "N/A" ? (
              <img
                src={movie.Poster}
                alt="movie-poster"
                className="movies-img"
              />
            ) : (
              <div className="movie-error">
              <h3>Error 404, Movie not found...</h3>
              </div>
            )}
            <div className="movie-details">
              <div className="movies-title">{movie.Title}</div>
              <span className="movies-year">{movie.Year}</span>
              <p>{movie.Type}</p>
            </div>
          </div>
        ))}
      </div> 
      ) : (<h2 style={{color: "red"}}>No movies found...</h2>)}
    </div>
  );
}
