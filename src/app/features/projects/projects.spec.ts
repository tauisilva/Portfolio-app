import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Projects } from './projects';
import { LanguageStore } from '@shared/services/language-store';

describe('Projects', () => {
  it('should create the projects showcase component', async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [
        LanguageStore,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(Projects);
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance.projects.length).toBe(5);
  });
});
