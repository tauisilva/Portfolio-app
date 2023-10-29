import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Products } from 'src/app/shared/services/products.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  type: "list" | "grid" = "list";
  data: boolean = false;
  products!: Product[];

  constructor(
    private router: Router,
    private service: Products
  ) { }

  ngOnInit() {
    this.service.getProducts().then((data) => {
      if (data) {
        this.products = data.slice(0, 12);
        setTimeout(() => {
          this.data = true;
        }, 500);
      }
    });
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
