import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageStore } from '../services/language-store';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private readonly languageStore = inject(LanguageStore);

  transform(key: string, params?: Record<string, string | number>): string {
    if (!key) {
      return '';
    }
    return this.languageStore.translate(key, params);
  }
}
