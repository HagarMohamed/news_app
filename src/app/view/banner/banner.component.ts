import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../service/news-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  constructor(private service: NewsServiceService) { }

  slides = [];
  ngOnInit(): void {

   this.service.getSlides((response: any) => {
    console.log(response);
    this.slides = response;
   })

  }

}
