import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { HomeComponent } from './view/home/home.component';
import { BannerComponent } from './view/banner/banner.component';
import { ThingsWeDoComponent } from './view/things-we-do/things-we-do.component';
import { LatestNewsComponent } from './view/latest-news/latest-news.component';
import { FooterComponent } from './view/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BannerComponent,
    ThingsWeDoComponent,
    LatestNewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
