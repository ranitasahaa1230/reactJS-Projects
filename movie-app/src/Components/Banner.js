import React from 'react'
import { movies } from './getMovies'

export default function Banner() {
    const movie=movies.results[0];
    // const movie='';
  return (
    <>
    {movie==="" ? 
    <div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
:
    <div className="card">
  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img" alt={movie.title}/>
    <h5 className="card-title">{movie.original_title}</h5>
    <p className="card-text">{movie.overview}</p>
</div>
}
</>
  )
}
