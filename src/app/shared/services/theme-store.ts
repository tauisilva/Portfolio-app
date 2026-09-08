import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeStore {
  private static readonly STORAGE_KEY = 'portfolio-theme';
  private static readonly DARK_CLASS = 'dark';

  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly currentTheme = signal<ThemeMode>(this.resolveInitialTheme());
  readonly isDark = computed(() => this.currentTheme() === 'dark');

  constructor() {
    this.applyTheme(this.currentTheme());
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.isDark() ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);
    this.applyTheme(theme);
    this.persistTheme(theme);
  }

  private resolveInitialTheme(): ThemeMode {
    if (!this.isBrowser) {
      return 'dark';
    }

    const storedTheme = localStorage.getItem(ThemeStore.STORAGE_KEY);
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }

    if (typeof window.matchMedia === 'function') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    return 'dark';
  }

  private applyTheme(theme: ThemeMode): void {
    if (!this.isBrowser) {
      return;
    }

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add(ThemeStore.DARK_CLASS);
    } else {
      root.classList.remove(ThemeStore.DARK_CLASS);
    }
  }

  private persistTheme(theme: ThemeMode): void {
    if (!this.isBrowser) {
      return;
    }

    localStorage.setItem(ThemeStore.STORAGE_KEY, theme);
  }
}
