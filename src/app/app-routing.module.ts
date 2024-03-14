import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// import { MoviesComponent } from './components/movies/movies.component';
// import { TvComponent } from './components/tv/tv.component';
// import { PeopleComponent } from './components/people/people.component';
// import { AboutComponent } from './components/about/about.component';
// import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard, authGuardLogin } from './common/gurads/auth.guard';


const routes: Routes = [

//auth
      {
        canActivate: [authGuardLogin],
        path: '',
        loadComponent: () =>
          import('./layouts/auth/auth.component').then(
            (m) => m.AuthComponent
          ),
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          {
            path: 'login',
            loadComponent: () =>
              import('./components/login/login.component').then(
                (m) => m.LoginComponent
              ),
            title: 'Login',
          },
          {
            path: 'register',

            loadComponent: () =>
              import('./components/register/register.component').then(
                (m) => m.RegisterComponent
              ),
            title: 'Register',
          },

        ],
      },


// //blank
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layouts/blank/blank.component').then(
        (m) => m.BlankComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (m) => m.HomeComponent
          ),
        title: 'Home',
      },
      {
        path: 'moviedetails/:movie_id/:media_type',
        loadComponent: () =>
          import('./components/movie-details/movie-details.component').then(
            (m) => m.MovieDetailsComponent
          ),
        title: 'Home',
      },
      {
        path: 'actorderails/:person_id/:person_type',
        loadComponent: () =>
          import('./components/actor/actor.component').then(
            (m) => m.ActorComponent
          ),
        title: 'Home',
      },

    ],
  },

//   // {
//   //   canActivate: [authGuard],path: '',loadComponent: () =>
//   //     import('./layouts/blank/blank.component').then((m) => m.BlankComponent),
//   //   children: [
//   //     { path: '', redirectTo: 'home', pathMatch: 'full' },
//   //     {
//   //       path: 'home',
//   //       loadComponent: () =>
//   //         import('./components/home/home.component').then(
//   //           (m) => m.HomeComponent
//   //         ),
//   //     },

//   //     {
//   //       path: '**',
//   //       loadComponent: () =>
//   //         import('./components/notfound/notfound.component').then(
//   //           (m) => m.NotfoundComponent
//   //         ),
//   //     },
//   //   ],
//   // },


//   //notfound
  {
    path: '**',
    loadComponent: () =>
      import('./components/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
    title: 'Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
