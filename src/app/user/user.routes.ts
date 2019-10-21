import { ProfileComponent } from "../user/profile/profile.component";
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';

export const userRoutes = [
  {path: 'profile', component:ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];
