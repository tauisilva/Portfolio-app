import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate';

export interface ProjectItem {
  readonly id: string;
  readonly number: string;
  readonly badgeKey: string;
  readonly titleKey: string;
  readonly descKey: string;
  readonly icon: string;
  readonly gradientClass: string;
  readonly tags: readonly string[];
  readonly liveUrl?: string;
  readonly frontUrl?: string;
  readonly backUrl?: string;
  readonly repoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="pt-space-2xl pb-space-2xl" id="projetos">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
        <div class="flex flex-col max-w-2xl">
          <div class="inline-flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span class="font-label-mono text-xs text-primary uppercase tracking-wider font-semibold">
              {{ 'projects.eyebrow' | translate }}
            </span>
          </div>
          <h2 class="font-headline-xl text-2xl lg:text-3xl text-on-surface font-bold tracking-tight">
            {{ 'projects.title' | translate }}
          </h2>
          <p class="font-body-base text-sm lg:text-base text-on-surface-variant mt-1.5 leading-relaxed">
            {{ 'projects.subtitle' | translate }}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-label-mono text-xs text-on-surface-variant/80 border border-outline-variant px-3 py-1.5 rounded-lg bg-surface-container-low font-semibold shadow-sm">
            {{ 'projects.indexed' | translate }}
          </span>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        @for (project of projects; track project.id) {
          <article
            class="flex flex-col bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
          >
            <!-- Visual Mockup Card Banner -->
            <div class="h-36 relative overflow-hidden bg-linear-to-br {{ project.gradientClass }} flex items-center justify-center border-b border-outline-variant/60 p-4">
              <!-- Background Pattern / Glow -->
              <div class="absolute inset-0 bg-surface/30 backdrop-blur-[2px]"></div>
              <!-- Floating App Icon Mockup -->
              <div class="relative z-10 flex flex-col items-center gap-2">
                <div class="w-12 h-12 rounded-xl bg-surface/90 border border-outline-variant shadow-md flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-[26px]">{{ project.icon }}</span>
                </div>
                <span class="px-2.5 py-0.5 rounded-full font-label-mono text-[10px] bg-surface/80 text-on-surface border border-outline-variant font-semibold shadow-sm">
                  {{ project.badgeKey | translate }}
                </span>
              </div>
              <span class="absolute top-3 right-3 font-mono text-xs text-on-surface-variant/70 font-bold">
                {{ project.number }}
              </span>
            </div>

            <div class="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <!-- Title -->
                <h3 class="font-headline-lg text-lg text-on-surface font-bold group-hover:text-primary transition-colors">
                  {{ project.titleKey | translate }}
                </h3>

                <!-- Purpose & Impact Description -->
                <p class="font-body-sm text-xs text-on-surface-variant mt-2.5 leading-relaxed">
                  {{ project.descKey | translate }}
                </p>

                <!-- Tech Tags -->
                <div class="flex flex-wrap gap-1.5 mt-space-md mb-space-lg">
                  @for (tag of project.tags; track tag) {
                    <span class="px-2.5 py-0.5 rounded-md font-label-mono text-[10px] bg-surface-container-low border border-outline-variant text-on-surface font-semibold">
                      {{ tag }}
                    </span>
                  }
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap items-center gap-2 pt-3 border-t border-outline-variant">
                @if (project.liveUrl) {
                  <a
                    [href]="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-headline-sm text-xs font-semibold flex items-center gap-1.5 hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <span class="material-symbols-outlined text-[15px]">visibility</span>
                    <span>{{ 'projects.live_demo' | translate }}</span>
                  </a>
                }
                @if (project.frontUrl) {
                  <a
                    [href]="project.frontUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-2.5 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant text-on-surface hover:text-tertiary font-headline-sm text-xs font-medium flex items-center gap-1 transition-colors"
                  >
                    <span class="material-symbols-outlined text-[14px]">code</span>
                    <span>{{ 'projects.frontend_repo' | translate }}</span>
                  </a>
                }
                @if (project.backUrl) {
                  <a
                    [href]="project.backUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-2.5 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant text-on-surface hover:text-primary font-headline-sm text-xs font-medium flex items-center gap-1 transition-colors"
                  >
                    <span class="material-symbols-outlined text-[14px]">dns</span>
                    <span>{{ 'projects.backend_repo' | translate }}</span>
                  </a>
                }
                @if (project.repoUrl) {
                  <a
                    [href]="project.repoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-2.5 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant text-on-surface hover:text-secondary font-headline-sm text-xs font-medium flex items-center gap-1 transition-colors"
                  >
                    <span class="material-symbols-outlined text-[14px]">terminal</span>
                    <span>{{ 'projects.github_code' | translate }}</span>
                  </a>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class Projects {
  readonly projects: readonly ProjectItem[] = [
    {
      id: 'nbx-stream',
      number: '01',
      badgeKey: 'projects.nbx_badge',
      titleKey: 'projects.nbx_title',
      descKey: 'projects.nbx_desc',
      icon: 'smart_display',
      gradientClass: 'from-primary/20 via-tertiary/10 to-primary/5',
      tags: ['Angular 22', 'Quarkus 3', 'Java 21', 'Docker Compose'],
      liveUrl: 'https://github.com/tauisilva',
      frontUrl: 'https://github.com/tauisilva/Portfolio-app',
      backUrl: 'https://github.com/tauisilva/Portfolio-api',
    },
    {
      id: 'campus-connect',
      number: '02',
      badgeKey: 'projects.campus_badge',
      titleKey: 'projects.campus_title',
      descKey: 'projects.campus_desc',
      icon: 'school',
      gradientClass: 'from-secondary/25 via-primary/10 to-secondary/5',
      tags: ['Angular SPA', 'Java 21', 'WebSockets', 'PostgreSQL'],
      liveUrl: 'https://github.com/tauisilva',
      repoUrl: 'https://github.com/tauisilva',
    },
    {
      id: 'portfolio-monorepo',
      number: '03',
      badgeKey: 'projects.portfolio_badge',
      titleKey: 'projects.portfolio_title',
      descKey: 'projects.portfolio_desc',
      icon: 'devices',
      gradientClass: 'from-tertiary/25 via-secondary/15 to-tertiary/5',
      tags: ['Angular 22', 'Quarkus 3', 'GitHub Actions', 'Docker'],
      liveUrl: 'https://tauisilva.github.io/Portfolio-app/',
      repoUrl: 'https://github.com/tauisilva/Portfolio-app',
    },
    {
      id: 'currency-converter',
      number: '04',
      badgeKey: 'projects.currency_badge',
      titleKey: 'projects.currency_title',
      descKey: 'projects.currency_desc',
      icon: 'payments',
      gradientClass: 'from-accent-peach/25 via-primary/10 to-accent-peach/5',
      tags: ['Angular', 'RxJS Streams', 'Vitest', 'Tailwind CSS'],
      liveUrl: 'https://github.com/tauisilva',
      repoUrl: 'https://github.com/tauisilva',
    },
    {
      id: 'swagger-dark-theme',
      number: '05',
      badgeKey: 'projects.swagger_badge',
      titleKey: 'projects.swagger_title',
      descKey: 'projects.swagger_desc',
      icon: 'api',
      gradientClass: 'from-secondary/20 via-tertiary/15 to-primary/10',
      tags: ['Java 21', 'Quarkus / Spring', 'OpenAPI 3', 'DEV.to'],
      liveUrl: 'https://dev.to',
      repoUrl: 'https://github.com/tauisilva',
    },
  ];
}
