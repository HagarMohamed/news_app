import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) {}

  
  slides = [];
  news = [];

  getSlides(callback: any){
    let url: string = 'https://api.npoint.io/1d796a6410023fc63ab1';
    this.http.get(url)
    .subscribe((responce: any) =>{
      callback(responce);

    })  
  }

getNewsListing(callback: any){
  let url = 'https://api.npoint.io/9b22cfe9d24dd0c8a222';
  this.http.get(url)
  .subscribe(response => {
    callback(response);
  })

}



}
