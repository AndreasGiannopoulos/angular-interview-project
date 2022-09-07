import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
// import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MylistComponent } from './mylist/mylist.component';

const routes: Routes = [
  { path: 'details/:id/:mediatype', component: DetailsComponent },
  // { path: 'movies' ,component: HomeComponent },
  { path: '', component: MoviesComponent },
  { path: 'favorites', component: MylistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
