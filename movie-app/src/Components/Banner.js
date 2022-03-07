import React from 'react'
import { movies } from './getMovies'


export default function Banner() {
    const movie=movies.results[0];
  return (
    <>
    {movie==="" ? <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:
    <div className="card" style="width: 18rem;">
  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt={movie.title}/>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
}
</>
  )
}
