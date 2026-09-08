import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { TranslatePipe } from './translate';
import { LanguageStore } from '../services/language-store';

describe('TranslatePipe', () => {
  let pipe: TranslatePipe;
  let store: LanguageStore;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        LanguageStore,
        TranslatePipe,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });
    pipe = TestBed.inject(TranslatePipe);
    store = TestBed.inject(LanguageStore);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform translation key to active language text', () => {
    store.setLanguage('pt-BR');
    expect(pipe.transform('nav.about')).toBe('Sobre');

    store.setLanguage('en');
    expect(pipe.transform('nav.about')).toBe('About');
  });

  it('should handle empty key gracefully', () => {
    expect(pipe.transform('')).toBe('');
  });
});
