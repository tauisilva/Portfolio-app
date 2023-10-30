import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Products } from '../../services/products.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  products: Product[] = [];
  num: number = 4.1;
  responsiveOptions: any[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: Products
  ) { }

  ngOnInit() {
    this.service.getProducts().then((products) => {
      this.products = products;
    })
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
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

  load() {

  }

  projects(routes: string) {
    this.router.navigate([routes]);
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return '';
    }
  };
}
