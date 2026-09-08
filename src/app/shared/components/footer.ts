import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <footer class="relative z-10 w-full bg-surface border-t border-outline-variant mt-space-4xl transition-colors">
      <div class="max-w-container-max mx-auto px-gutter-desktop py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
        <!-- Brand & Description -->
        <div class="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div class="flex items-center gap-2">
            <span class="font-headline-sm text-sm text-on-surface font-bold">Taui Silva</span>
            <span class="font-label-mono text-xs text-outline">•</span>
            <span class="font-label-mono text-xs text-primary font-semibold">
              {{ 'footer.role' | translate }}
            </span>
          </div>
          <p class="font-body-sm text-xs text-on-surface-variant max-w-xl">
            {{ 'footer.description' | translate }}
          </p>
        </div>

        <!-- Status & Copyright -->
        <div class="flex flex-col md:flex-row items-center gap-4 text-xs font-label-mono text-on-surface-variant">
          <div class="flex items-center gap-1.5">
            <span class="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>{{ 'footer.status' | translate }}</span>
          </div>
          <span class="text-outline hidden md:inline">•</span>
          <span>{{ 'footer.rights' | translate }}</span>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {}
