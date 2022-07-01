import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { NewsDetailsComponent } from './view/news-details/news-details.component';

const routes: Routes = [

  {path: "home", component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'news-details', component: NewsDetailsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
