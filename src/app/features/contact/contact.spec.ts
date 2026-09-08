import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Contact } from './contact';
import { LanguageStore } from '@shared/services/language-store';

describe('Contact', () => {
  it('should create the contact component and toggle between cards and terminal', async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [
        LanguageStore,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(Contact);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href*="linkedin"]')).toBeTruthy();

    component.toggleTerminal();
    fixture.detectChanges();
    expect(compiled.textContent).toContain('fullstack-services.target');
  });
});
