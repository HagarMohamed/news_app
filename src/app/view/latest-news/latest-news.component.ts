import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.sass']
})
export class LatestNewsComponent implements OnInit {

  constructor(private service: NewsServiceService) { }

  news = [];
  ngOnInit(): void {

  this.service.getNewsListing((responce: any) =>{
    console.log(responce);
    this.news = responce;

  })
  }

}
