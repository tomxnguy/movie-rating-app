import { useState, useEffect } from "react";
import { readMovies } from "./api.ts";

export type Movie = {
  movieId: number;
  title: string;
  summary: string;
  imdbLink: string;
  rating: number;
};

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movieData = await readMovies();
        console.log("Fetched movies:", movieData);
        setMovies(movieData);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.movieId}>
              <h3>{movie.title}</h3>
              <p>{movie.summary}</p>
              <a
                href={movie.imdbLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDb
              </a>
              <p>Rating: {movie.rating}/5</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
