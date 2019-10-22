import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { MoviesService } from "../services/movies.service";

@Injectable()
export class MovieRouteActivator implements CanActivate {
  constructor(private moviesService: MoviesService, private router:Router) {
  }

  canActivate(route:ActivatedRouteSnapshot) {
    const eventExists = !!this.moviesService.getMovie(+route.params['id']);

    if(!eventExists) { this.router.navigate(['/404']); }

    return eventExists;
  }
}
