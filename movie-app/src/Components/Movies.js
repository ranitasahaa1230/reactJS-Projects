import React, { useState } from "react";
import { movies } from "./getMovies";

export default function Movies() {
  const [houver, setHover] = useState({ display: "none" });
  const [prevPage, setPage] = useState([1]);
  const movie = movies.results;
  return (
    <div>
      <div>
        {movie.length === "0" ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            <h2>Trending Movies</h2>
            <div
              className="movies-flex"
            >
              {movie.map((movieObj) => {
                return (
                  <div className="movies-card" 
                   onMouseEnter={(e) => {
                setHover({ display: "block" });
              }}
              onMouseLeave={(e) => {
                setHover({ display: "none" });
              }}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                      className="movies-img"
                      alt={movieObj.title}
                    />
                    <h5 className="movies-title">{movieObj.original_title}</h5>
                    <a href="#" className="btn btn-primary" style={houver}>
                      Add to Favourites
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="page-flex">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  {prevPage.map((value) => {
                    return (
                      <li class="page-item">
                        <a class="page-link" href="#">
                          {value}
                        </a>
                      </li>
                    );
                  })}
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
