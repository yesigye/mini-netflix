import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { ActivatedRoute } from "@angular/router";
import { MovieInterface } from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieInterface

  constructor(private movieService:MoviesService,
    private route:ActivatedRoute) {
      this.movieService.getMovie(
        +this.route.snapshot.params['id']
      ).subscribe(res => this.movie = this.movie = res);
  }

  ngOnInit() {
  }

}
