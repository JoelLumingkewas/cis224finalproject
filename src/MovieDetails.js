import React from "react";
import movieData from "./movieData.js";

// TODO: Import components/hooks from react-router-dom
import { Link, useParams } from "react-router-dom";

function MovieDetails() {
   // TODO: Call useParams() here
   const { movieId } = useParams();

   // TODO: Replace "tt0034583" with the movie ID parameter
   // find() returns undefined if the movieId cannot be found

   const movie = movieData.find(m => m.movieId === movieId);
   
   if (!movie) {
      return (
         <>
            <p>Movie with ID {movieId} not found.</p>
            <p><Link to="/">All Movies</Link></p>
         </>

      );
   }





   return (
      <>        
         <h2>{movie.title} ({movie.year})</h2>

         
         <p>
            {movie.desc}{" "}
            <a
               href={`https://www.imdb.com/title/${movieId}/`}
            >
            More information
            </a>
         </p>
         
         <p>Rated {movie.rating}.</p>

         <p><Link to="/">All Movies</Link></p>
      </>    
   );
}

export default MovieDetails;