import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  constructor(private service: NewsServiceService, private router: Router) { }

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
  viewNewItem(_id:number, cate_id: number){
    this.router.navigate(['/news-details'], {queryParams: {
      id : _id,
      cat_name : this.getCategoryName(cate_id)
    }
  })
   }

   getCategoryName(cate_id : number):string{

    let category = this.categories.find((cat_item: any) => cat_item.id == cate_id)
    return category.name

   }

}
