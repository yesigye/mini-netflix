import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes:Routes = [
  {path: '', component: MoviesComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]
