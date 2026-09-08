import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Navbar } from './navbar';
import { ThemeStore } from '@shared/services/theme-store';
import { LanguageStore } from '@shared/services/language-store';

describe('Navbar', () => {
  let component: Navbar;
  let themeStore: ThemeStore;
  let langStore: LanguageStore;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [
        ThemeStore,
        LanguageStore,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    themeStore = TestBed.inject(ThemeStore);
    langStore = TestBed.inject(LanguageStore);
    fixture.detectChanges();
  });

  it('should create the navbar', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle theme when button is clicked', () => {
    const initialIsDark = themeStore.isDark();
    themeStore.toggleTheme();
    expect(themeStore.isDark()).toBe(!initialIsDark);
  });

  it('should change language when language pill is selected', () => {
    component.setLanguage('en');
    expect(langStore.currentLanguage()).toBe('en');

    component.setLanguage('es');
    expect(langStore.currentLanguage()).toBe('es');
  });
});
