import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../pipes/translate';
import {
  LanguageOption,
  LanguageStore,
  SUPPORTED_LANGUAGES,
  SupportedLanguage,
} from '../services/language-store';
import { ThemeStore } from '../services/theme-store';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <header
      class="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/60 transition-colors"
    >
      <div
        class="h-20 max-w-container-max mx-auto px-gutter-desktop flex items-center justify-between gap-space-md"
      >
        <!-- Brand Identity -->
        <a href="#" class="flex items-center gap-space-sm group">
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <span
                class="font-headline-sm text-base font-bold text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors"
              >
                Taui Silva
              </span>
              <span
                class="px-2 py-0.5 rounded-full font-label-mono text-[10px] bg-secondary/15 text-secondary border border-secondary/30 font-semibold"
              >
                Full Stack Engineer
              </span>
            </div>
            <span
              class="font-label-mono text-[10px] tracking-wider text-primary flex items-center gap-1.5 mt-1 font-semibold"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              ANGULAR 22 • JAVA 21 • QUARKUS 3
            </span>
          </div>
        </a>

        <!-- Navigation Links (Desktop) -->
        <nav
          class="hidden md:flex items-center gap-1 p-1 rounded-xl bg-surface-container-low border border-outline-variant"
        >
          <a
            class="px-3.5 py-1.5 text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg"
            href="#sobre"
          >
            {{ 'nav.about' | translate }}
          </a>
          <a
            class="px-3.5 py-1.5 text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg"
            href="#projetos"
          >
            {{ 'nav.projects' | translate }}
          </a>
          <a
            class="px-3.5 py-1.5 text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg"
            href="#stack"
          >
            {{ 'nav.stack' | translate }}
          </a>
          <a
            class="px-3.5 py-1.5 text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg"
            href="#artigos"
          >
            {{ 'nav.articles' | translate }}
          </a>
          <a
            class="px-3.5 py-1.5 text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg"
            href="#contato"
          >
            {{ 'nav.contact' | translate }}
          </a>
        </nav>

        <!-- Right Controls (Language Switcher, Theme Toggle, CTA) -->
        <div class="flex items-center gap-2">
          <!-- Language Switcher Pills -->
          <div
            class="flex items-center bg-surface-container-low border border-outline-variant rounded-lg p-0.5"
          >
            @for (lang of languages; track lang.code) {
              <button
                type="button"
                (click)="setLanguage(lang.code)"
                [class.bg-surface]="langStore.currentLanguage() === lang.code"
                [class.text-primary]="langStore.currentLanguage() === lang.code"
                [class.shadow-sm]="langStore.currentLanguage() === lang.code"
                [class.text-on-surface-variant]="langStore.currentLanguage() !== lang.code"
                class="px-2 py-1 text-[11px] font-label-mono font-semibold rounded-md transition-all hover:text-on-surface"
                [attr.aria-label]="lang.label"
              >
                {{ lang.shortLabel }}
              </button>
            }
          </div>

          <!-- Theme Toggle -->
          <button
            type="button"
            (click)="themeStore.toggleTheme()"
            class="w-9 h-9 rounded-lg bg-surface-container-low border border-outline-variant hover:border-primary/50 text-on-surface flex items-center justify-center transition-colors shadow-sm"
            [attr.aria-label]="'nav.color_mode' | translate"
          >
            <span class="material-symbols-outlined text-[18px] text-accent-peach">
              {{ themeStore.isDark() ? 'light_mode' : 'dark_mode' }}
            </span>
          </button>

          <!-- Direct Resume / Contact CTA -->
          <a
            href="#contato"
            class="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-label-mono text-xs font-semibold bg-primary text-on-primary hover:bg-primary/90 transition-all shadow-sm"
          >
            <span class="material-symbols-outlined text-[16px] mr-1.5">description</span>
            {{ 'nav.resume' | translate }}
          </a>
        </div>
      </div>
    </header>
  `,
})
export class Navbar {
  protected readonly themeStore = inject(ThemeStore);
  protected readonly langStore = inject(LanguageStore);
  protected readonly languages: readonly LanguageOption[] = SUPPORTED_LANGUAGES;

  setLanguage(lang: SupportedLanguage): void {
    this.langStore.setLanguage(lang);
  }
}
