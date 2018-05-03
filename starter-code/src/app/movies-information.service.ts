import { Injectable } from '@angular/core';
import movies from '../sample-movies';

interface Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: string[];
  year: number;
  director: string;
  actors: string[];
}

@Injectable()
export class MoviesInformationService {

  allMovies: Array<Movie> = movies;

  constructor() { }

  getMovies() {
    return this.allMovies;
  }

  getMovie(id) {
    return this.allMovies.filter(f => f.id === id);
  }
}
