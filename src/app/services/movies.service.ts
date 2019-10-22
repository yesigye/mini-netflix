import { Injectable } from "@angular/core";
import { Observable, of, Observer } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';

@Injectable()
export class MoviesService {
  // To store API fetched movies
  // TODO: Find better way to persist data
  protected _movies:any;
  private moviesAPI = 'http://api.tvmaze.com/shows';

  constructor(private http: HttpClient) {
  }

  getMovies():Observable<any> {
    // If we fetched movies earlier, return them as an observable
    if (this._movies) { return of(this._movies); }

    // Fetch movies from API
    const MOVIES_OBSERVABLE = this.http.get(this.moviesAPI);
    // Catch errors
    MOVIES_OBSERVABLE.pipe(catchError(this.handleError('getMovies', [])));
    // Subscribe to observable and get movies out into global array
    MOVIES_OBSERVABLE.subscribe(movies => {this._movies = movies });

    return MOVIES_OBSERVABLE;
  }

  getMovie(id:number):Observable<any> {
    // If we fetched movies earlier, return them as an observable
    if (this._movies) { return of(this._movies.find(movie => movie.id === id)); }

    // Fetch movies from API
    return this.http.get(this.moviesAPI+'/'+id)
      .pipe(catchError(this.handleError('getMovies', [])));
  }

  // Handle errors that occur while trying to recieve movies
  private handleError<T>(operation = 'operation', result?: T) {
    return (error : any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
