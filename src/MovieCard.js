import React from 'react'
import "./MovieCards.css"
import MovieRating from './MovieRating'

import { Link } from 'react-router-dom';



// Functional component representing a movie card
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="container">
        <div className="cellphone-container">
          <div className="movie">
            <div className="menu">
              <i className="material-icons"></i>
            </div>
            {/* Movie poster image */}
            <div className="movie-img" style={{ backgroundImage: `url(${movie.posterURL})` }} />
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  {/* Movie title */}
                  <h1>{movie.title}</h1>
                </div>
              </div>
              {/* Movie description and rating */}
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>Description</h5>
                </div>
                <div className="col2">
                  <ul className="movie-likes">
                    <li>
                      {/* Displaying the movie rating */}
                      <i className="material-icons"></i> {movie.rating}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid">
                <div className="col1">
                  <p className="movie-description">
                    {movie.description}{" "}
                  </p>
                </div>
              </div>
              <div className="mr-grid actors-row">

              </div>
              <div className="mr-grid action-row">
                <div className="col2">
                  <div className="watch-btn">
                    {/* Link to the movie trailer */}
                    <Link to={`/movies/${movie.id}`}>  <h3><i className="material-icons"></i>WATCH TRAILER </h3></Link>
                  </div>
                  
                </div>
              </div>
              <MovieRating />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

// Exporting the MovieCard component as the default export
export default MovieCard
