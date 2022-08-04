import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Emprequest } from 'src/app/enums.ts/emprequest.enums';
@Component({
  selector: 'app-feedback-carousel',
  templateUrl: './feedback-carousel.component.html',
  styleUrls: ['./feedback-carousel.component.scss']
})
export class FeedbackCarouselComponent implements OnInit {

  data!:any

  constructor(
    private requestData:Emprequest
  ) { }

  ngOnInit(): void {
    this.data = this.requestData.employeeRequest
    console.log(this.requestData.employeeRequest)
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}