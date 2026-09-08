import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Hero } from './hero';
import { LanguageStore } from '@shared/services/language-store';

describe('Hero', () => {
  it('should create the hero component and toggle profile tabs', async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [
        LanguageStore,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(Hero);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();

    component.setActiveTab('tech');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Client Tier');

    component.setActiveTab('business');
    fixture.detectChanges();
    expect(compiled.textContent).toContain('TS');
  });
});
