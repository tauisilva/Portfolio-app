import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { LanguageStore } from './language-store';

describe('LanguageStore', () => {
  let store: LanguageStore;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute('lang', 'pt-BR');
    TestBed.configureTestingModule({
      providers: [
        LanguageStore,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });
    store = TestBed.inject(LanguageStore);
  });

  it('should initialize with default language or detected language', () => {
    expect(store).toBeTruthy();
    expect(store.currentLanguage()).toBeDefined();
  });

  it('should translate nested keys in default language (pt-BR)', () => {
    store.setLanguage('pt-BR');
    expect(store.t('nav.about')).toBe('Sobre');
    expect(store.t('nav.projects')).toBe('Projetos Fullstack');
  });

  it('should switch language dynamically to English and Spanish', () => {
    store.setLanguage('en');
    expect(store.currentLanguage()).toBe('en');
    expect(store.t('nav.about')).toBe('About');
    expect(document.documentElement.getAttribute('lang')).toBe('en');

    store.setLanguage('es');
    expect(store.currentLanguage()).toBe('es');
    expect(store.t('nav.about')).toBe('Sobre mí');
    expect(document.documentElement.getAttribute('lang')).toBe('es');
  });

  it('should persist language changes to localStorage', () => {
    store.setLanguage('en');
    expect(localStorage.getItem('portfolio-language')).toBe('en');

    store.setLanguage('es');
    expect(localStorage.getItem('portfolio-language')).toBe('es');
  });

  it('should return raw key when translation is not found', () => {
    expect(store.t('non.existent.key')).toBe('non.existent.key');
  });
});
