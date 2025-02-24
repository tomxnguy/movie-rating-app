import type { Movie } from "./App.tsx";

export async function readMovies(): Promise<Movie[]> {
  const response = await fetch("/api/movies");
  const movies = await response.json();
  return movies;
}
