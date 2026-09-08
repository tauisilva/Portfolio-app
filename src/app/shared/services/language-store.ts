import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import ptBR from '@assets/i18n/pt-BR.json';
import en from '@assets/i18n/en.json';
import es from '@assets/i18n/es.json';

export type SupportedLanguage = 'pt-BR' | 'en' | 'es';

export interface LanguageOption {
  readonly code: SupportedLanguage;
  readonly label: string;
  readonly shortLabel: string;
  readonly flag: string;
}

export const SUPPORTED_LANGUAGES: readonly LanguageOption[] = [
  { code: 'pt-BR', label: 'Português (BR)', shortLabel: 'PT', flag: '🇧🇷' },
  { code: 'en', label: 'English (US)', shortLabel: 'EN', flag: '🇺🇸' },
  { code: 'es', label: 'Español (ES)', shortLabel: 'ES', flag: '🇪🇸' },
];

const DICTIONARIES: Record<SupportedLanguage, Record<string, unknown>> = {
  'pt-BR': ptBR,
  'en': en,
  'es': es,
};

@Injectable({
  providedIn: 'root',
})
export class LanguageStore {
  private static readonly STORAGE_KEY = 'portfolio-language';
  private static readonly FALLBACK_LANG: SupportedLanguage = 'pt-BR';

  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly currentLanguage = signal<SupportedLanguage>(this.resolveInitialLanguage());
  readonly isPortuguese = computed(() => this.currentLanguage() === 'pt-BR');
  readonly currentOption = computed(
    () => SUPPORTED_LANGUAGES.find((l) => l.code === this.currentLanguage()) ?? SUPPORTED_LANGUAGES[0],
  );

  constructor() {
    this.applyLanguageAttribute(this.currentLanguage());
  }

  setLanguage(language: SupportedLanguage): void {
    this.currentLanguage.set(language);
    this.applyLanguageAttribute(language);
    this.persistLanguage(language);
  }

  t(key: string, params?: Record<string, string | number>): string {
    return this.translate(key, params);
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const activeLang = this.currentLanguage();
    const activeDict = DICTIONARIES[activeLang];

    let translated = this.resolveNestedKey(activeDict, key);

    if (!translated && activeLang !== LanguageStore.FALLBACK_LANG) {
      translated = this.resolveNestedKey(DICTIONARIES[LanguageStore.FALLBACK_LANG], key);
    }

    const result = translated ?? key;
    return this.interpolate(result, params);
  }

  private resolveNestedKey(obj: Record<string, unknown>, key: string): string | null {
    const parts = key.split('.');
    let current: unknown = obj;

    for (const part of parts) {
      if (typeof current !== 'object' || current === null) {
        return null;
      }
      current = (current as Record<string, unknown>)[part];
    }

    return typeof current === 'string' ? current : null;
  }

  private interpolate(text: string, params?: Record<string, string | number>): string {
    if (!params) {
      return text;
    }
    return text.replace(/\{\{(\w+)\}\}/g, (_, placeholder) => {
      const value = params[placeholder];
      return value !== undefined ? String(value) : `{{${placeholder}}}`;
    });
  }

  private resolveInitialLanguage(): SupportedLanguage {
    if (!this.isBrowser) {
      return LanguageStore.FALLBACK_LANG;
    }

    const stored = localStorage.getItem(LanguageStore.STORAGE_KEY);
    if (this.isSupportedLanguage(stored)) {
      return stored;
    }

    const browserLang = navigator.language?.toLowerCase() ?? '';
    if (browserLang.startsWith('pt')) {
      return 'pt-BR';
    }
    if (browserLang.startsWith('es')) {
      return 'es';
    }
    if (browserLang.startsWith('en')) {
      return 'en';
    }

    return LanguageStore.FALLBACK_LANG;
  }

  private isSupportedLanguage(lang: string | null): lang is SupportedLanguage {
    return lang === 'pt-BR' || lang === 'en' || lang === 'es';
  }

  private applyLanguageAttribute(language: SupportedLanguage): void {
    if (!this.isBrowser) {
      return;
    }
    document.documentElement.setAttribute('lang', language);
  }

  private persistLanguage(language: SupportedLanguage): void {
    if (!this.isBrowser) {
      return;
    }
    localStorage.setItem(LanguageStore.STORAGE_KEY, language);
  }
}
