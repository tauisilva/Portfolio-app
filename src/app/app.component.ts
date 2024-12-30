import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@shared/theme.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [ThemeService]
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';

  constructor(private theme: ThemeService) { }

  ngOnInit() {
    this.theme.init();
  }

  toggleDarkMode() {
    this.theme.toggleDarkMode();
  }

  isDarkMode() {
    return this.theme.darkMode;
  }
}