import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  constructor(private service: NewsServiceService) { }

  news: any = [];
  selectedNews: any =[];
  categories: any = [];
  isSelected = -1;
  ngOnInit(): void {

    this.service.getNewsCategory((responce: any) =>{
      console.log(responce);
      this.categories = responce.newsCategory;
      this.categories.unshift({
        "id": -1,
        "name": "All"
    })
    
     });

  this.service.getNewsListing((responce: any) =>{
    console.log(responce);
    this.news = responce.News;
    this.selectedNews = responce.News;

  })


  }

  selected(catId: number){
    this.isSelected = catId;

    if(catId == -1){
      this.selectedNews = this.news;
    }
    else{
      let result = this.news.filter(  (newItem: any) => newItem.categoryID == catId );
      this.selectedNews = result;
    }
    
    
  }


}
