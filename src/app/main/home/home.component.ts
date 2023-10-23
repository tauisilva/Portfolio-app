import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = Array(5).fill({});

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 5,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 3,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}
