import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@shared/theme.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, NgClass, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [ThemeService],
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';

  buttons = [
    { icon: 'bi-linkedin', action: () => this.openLink('https://www.linkedin.com/in/taui-silva/') },
    { icon: 'bi-github', action: () => this.openLink('https://github.com/tauisilva') }
  ];

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

  openLink(type: string) {
    window.open(type, '_blank');
  }
}
