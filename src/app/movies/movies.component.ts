import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieInterface } from "../interfaces/movie.interface";
import { Subscription } from 'rxjs';
import { paginate  } from "../helpers/paginate";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit, OnDestroy {
  allMovies: MovieInterface[];
  filteredMovies: any[];
  subscription: Subscription;
  currentPage: number;
  pageSize: number;
  movies

  constructor(private moviesService: MoviesService) {
    this.currentPage = 1;
    this.pageSize = 12;
  }

  filterMovies(term: string) {
    let filtered = (term) ?
    [this.allMovies.find(m => m.name.toLowerCase().includes(term.toLowerCase()))] :
    this.allMovies;

    this.movies = paginate(filtered, this.currentPage, this.pageSize);
  }

  handlePageChange() {
    console.log(this.currentPage)
    this.movies = paginate(this.allMovies, this.currentPage, this.pageSize);
    console.log(this.movies)
  }

  ngOnInit() {
    this.subscription = this.moviesService.getMovies().subscribe(
      movies => this.allMovies = this.filteredMovies = movies
    );
    this.movies = paginate(this.allMovies, this.currentPage, this.pageSize);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.currentPage = 1;
  }
}
