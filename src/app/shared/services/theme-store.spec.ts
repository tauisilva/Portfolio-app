import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { ThemeStore } from './theme-store';

describe('ThemeStore', () => {
  let store: ThemeStore;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    TestBed.configureTestingModule({
      providers: [
        ThemeStore,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });
    store = TestBed.inject(ThemeStore);
  });

  it('should be created and resolve initial theme', () => {
    expect(store).toBeTruthy();
    expect(store.currentTheme()).toBeDefined();
  });

  it('should toggle theme between dark and light', () => {
    store.setTheme('dark');
    expect(store.isDark()).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    store.toggleTheme();
    expect(store.isDark()).toBe(false);
    expect(store.currentTheme()).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should persist theme change to localStorage', () => {
    store.setTheme('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');

    store.setTheme('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });
});
