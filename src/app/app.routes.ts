import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotFoundComponent } from "./errors/not-found/not-found.component";

import {
  MovieRouteActivator,
  MovieResolver,
  MovieDetailsComponent,
  MoviesComponent,
 } from "./movies/index";

export const appRoutes:Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    resolve: {movies: MovieResolver}
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    canActivate: [MovieRouteActivator]
  },
  {path: 'favorites', component: FavoritesComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
]
