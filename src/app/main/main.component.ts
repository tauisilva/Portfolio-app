import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    private router: Router
  ) { }

  nav(router: string) {
    this.router.navigate([router]);
  }
}
