import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  new_item: any = {};
  cate_name: string = "";

  constructor(private service: NewsServiceService, private route : ActivatedRoute) { 

  }
  

  ngOnInit(): void {
    let _id = parseInt(this.route.snapshot.queryParamMap.get('id') || "0");
    this.cate_name = this.route.snapshot.queryParamMap.get('cat_name') || "";

     this.service.getNewsItem(_id - 1,(responce: any) => {
      console.log(responce);
      this.new_item = responce;
    })

    

    
  }

}
