import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:any

  constructor(private movieService:MoviesService,
    private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.movie = this.movieService.getMovie(
      +this.route.snapshot.params['id']
    );
  }

}
