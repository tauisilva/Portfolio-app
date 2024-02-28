import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  private theme = inject(ThemeService);
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.theme.getTheme();
    }
  }
}
