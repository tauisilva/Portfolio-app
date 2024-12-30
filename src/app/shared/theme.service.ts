import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.init();
  }

  init() {
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = this.isDarkModeFromLocalStorage();
      this.applyTheme();
    }
  }

  toggleDarkMode() {
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = !this.darkMode;
      this.applyTheme();
      this.saveDarkModeToLocalStorage();
    }
  }

  private isDarkModeFromLocalStorage(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }

  private saveDarkModeToLocalStorage(): void {
    localStorage.setItem('darkMode', this.darkMode.toString());
  }

  private applyTheme(): void {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.classList.toggle('my-app-dark', this.darkMode);
    }
  }
}
