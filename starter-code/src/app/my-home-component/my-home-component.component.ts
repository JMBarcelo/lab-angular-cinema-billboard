import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MoviesInformationService } from '../movies-information.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesInformationService]
})
export class MyHomeComponentComponent implements OnInit {

  movies: Object[] = [];

  constructor(private route: ActivatedRoute, private movie: MoviesInformationService) { }

  ngOnInit() {
    this.movies = this.movie.getMovies();
  }

}
