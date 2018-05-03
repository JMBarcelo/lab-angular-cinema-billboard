import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MoviesInformationService } from '../movies-information.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [MoviesInformationService]
})
export class MyMovieComponentComponent implements OnInit {

  movie: Object[] = [];

  id: number;
  
  constructor(private route: ActivatedRoute, private movies: MoviesInformationService) {
    this.route.params.subscribe(params => this.id = parseInt(params.id))
  }
  
  ngOnInit() {
    this.movie = this.movies.getMovie(this.id);
  }
}
