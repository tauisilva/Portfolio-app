import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeTheme: string = 'dark';

  getTheme() {
    const theme = sessionStorage.getItem('theme');
    if (theme) {
      console.log(theme)
      this.setTheme(theme);
    }
  }

  toggleTheme() {
    this.setTheme(this.activeTheme === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: string) {
    let themeLink = document
      .getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
    }
    sessionStorage.setItem('theme', theme);
    this.activeTheme = theme;
  }

  setThemeNavegador() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    sessionStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.setTheme(isDark ? 'dark' : 'light');
  }
}
