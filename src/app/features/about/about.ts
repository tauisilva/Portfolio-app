import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="pt-space-2xl pb-space-3xl" id="sobre">
      <!-- Section Header -->
      <div class="flex flex-col max-w-3xl mb-space-xl">
        <div class="inline-flex items-center gap-2 mb-2">
          <span class="w-2 h-2 rounded-full bg-primary"></span>
          <span class="font-label-mono text-xs text-primary uppercase tracking-wider font-semibold">
            {{ 'about.eyebrow' | translate }}
          </span>
        </div>
        <h2 class="font-headline-lg text-2xl lg:text-3xl font-bold text-on-surface tracking-tight">
          {{ 'about.title' | translate }}
        </h2>
        <p class="font-body-base text-sm lg:text-base text-on-surface-variant mt-2 leading-relaxed">
          {{ 'about.subtitle' | translate }}
        </p>
      </div>

      <!-- Content Grid: Bio & Pillars -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        <!-- Left: Narrative Bio (7 cols) -->
        <div class="lg:col-span-7 flex flex-col gap-4">
          <div class="p-space-lg rounded-2xl bg-surface border border-outline-variant shadow-sm space-y-4">
            <p class="font-body-base text-sm lg:text-base text-on-surface leading-relaxed">
              {{ 'about.bio_p1' | translate }}
            </p>
            <p class="font-body-base text-sm lg:text-base text-on-surface-variant leading-relaxed">
              {{ 'about.bio_p2' | translate }}
            </p>

            <!-- Recruiter Quick Summary Callout -->
            <div class="pt-3 border-t border-outline-variant flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center gap-2 text-xs font-label-mono text-primary font-semibold">
                <span class="material-symbols-outlined text-[18px]">verified</span>
                <span>Stack Principal: Angular 22 • Java 21 • Quarkus 3 • PostgreSQL</span>
              </div>
              <a
                href="#contato"
                class="inline-flex items-center gap-1.5 text-xs font-label-mono text-secondary hover:underline font-semibold"
              >
                <span>{{ 'nav.resume' | translate }}</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: 3 Key Recruiter Pillars (5 cols) -->
        <div class="lg:col-span-5 flex flex-col gap-3.5">
          <!-- Pillar 1: End-to-End -->
          <div class="p-space-md rounded-2xl bg-surface border border-outline-variant hover:border-primary/50 transition-all shadow-sm flex items-start gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">layers</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-headline-sm text-sm font-bold text-on-surface">
                {{ 'about.pillar1_title' | translate }}
              </h3>
              <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                {{ 'about.pillar1_desc' | translate }}
              </p>
            </div>
          </div>

          <!-- Pillar 2: Quality & Clean Code -->
          <div class="p-space-md rounded-2xl bg-surface border border-outline-variant hover:border-secondary/50 transition-all shadow-sm flex items-start gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">verified_user</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-headline-sm text-sm font-bold text-on-surface">
                {{ 'about.pillar2_title' | translate }}
              </h3>
              <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                {{ 'about.pillar2_desc' | translate }}
              </p>
            </div>
          </div>

          <!-- Pillar 3: Communication & Teamwork -->
          <div class="p-space-md rounded-2xl bg-surface border border-outline-variant hover:border-tertiary/50 transition-all shadow-sm flex items-start gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">handshake</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-headline-sm text-sm font-bold text-on-surface">
                {{ 'about.pillar3_title' | translate }}
              </h3>
              <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                {{ 'about.pillar3_desc' | translate }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {}
