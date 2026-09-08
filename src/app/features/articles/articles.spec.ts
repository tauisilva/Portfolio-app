import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Articles } from './articles';
import { LanguageStore } from '@shared/services/language-store';

describe('Articles', () => {
  it('should create the articles component', async () => {
    await TestBed.configureTestingModule({
      imports: [Articles],
      providers: [
        LanguageStore,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(Articles);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
