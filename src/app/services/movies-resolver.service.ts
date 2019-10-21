import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { MoviesService } from "./movies.service";
import { map } from "rxjs/operators";

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private moviesService: MoviesService) {
  }

  resolve() {
    return this.moviesService.getMovies().pipe(map(movies => movies))
  }
}
