import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Footer } from './footer';
import { LanguageStore } from '@shared/services/language-store';

describe('Footer', () => {
  it('should create the footer', async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [
        LanguageStore,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(Footer);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
