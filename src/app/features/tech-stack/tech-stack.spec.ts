import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { TechStack } from './tech-stack';
import { LanguageStore } from '@shared/services/language-store';

describe('TechStack', () => {
  it('should create the tech stack component with 4 columns', async () => {
    await TestBed.configureTestingModule({
      imports: [TechStack],
      providers: [
        LanguageStore,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(TechStack);
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance.columns.length).toBe(4);
  });
});
