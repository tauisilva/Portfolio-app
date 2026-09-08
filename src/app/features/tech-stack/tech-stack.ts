import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate';

export interface TechSkill {
  readonly name: string;
  readonly category: string;
  readonly highlight?: boolean;
}

export interface TechColumn {
  readonly titleKey: string;
  readonly subtitleKey: string;
  readonly icon: string;
  readonly colorClass: string;
  readonly skills: readonly TechSkill[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="pt-space-2xl pb-space-3xl" id="stack">
      <!-- Section Header -->
      <div class="flex flex-col mb-space-xl">
        <div class="inline-flex items-center gap-2 mb-2">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="font-label-mono text-xs text-primary uppercase tracking-wider font-semibold">
            {{ 'stack.eyebrow' | translate }}
          </span>
        </div>
        <h2 class="font-headline-xl text-2xl lg:text-3xl text-on-surface font-bold tracking-tight">
          {{ 'stack.title' | translate }}
        </h2>
        <p class="font-body-base text-sm lg:text-base text-on-surface-variant mt-1.5 max-w-2xl leading-relaxed">
          {{ 'stack.subtitle' | translate }}
        </p>
      </div>

      <!-- 4 Columns Grid: Clear for HR & Technical Leads -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        @for (col of columns; track col.titleKey) {
          <div class="bg-surface border border-outline-variant rounded-2xl p-space-md shadow-sm flex flex-col hover:border-primary/50 transition-all">
            <!-- Column Title Header -->
            <div class="flex items-center gap-3 mb-space-md pb-space-sm bg-surface-container-low px-3 py-2 rounded-xl border border-outline-variant">
              <span class="material-symbols-outlined text-[22px]" [class]="col.colorClass">
                {{ col.icon }}
              </span>
              <div class="flex flex-col">
                <span class="font-headline-sm text-xs lg:text-sm text-on-surface font-bold">
                  {{ col.titleKey | translate }}
                </span>
                <span class="font-body-sm text-[11px] text-on-surface-variant font-medium">
                  {{ col.subtitleKey | translate }}
                </span>
              </div>
            </div>

            <!-- Skills List -->
            <div class="grid grid-cols-1 gap-1.5 flex-1">
              @for (skill of col.skills; track skill.name) {
                <div
                  class="flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/80 hover:border-primary/40 transition-colors"
                >
                  <span class="font-body-sm text-xs text-on-surface font-medium">
                    {{ skill.name }}
                  </span>
                  <span
                    class="font-label-mono text-[9px] px-2 py-0.5 rounded font-semibold bg-surface-container border border-outline-variant text-on-surface-variant"
                  >
                    {{ skill.category }}
                  </span>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class TechStack {
  readonly columns: readonly TechColumn[] = [
    {
      titleKey: 'stack.frontend_title',
      subtitleKey: 'stack.frontend_sub',
      icon: 'web',
      colorClass: 'text-tertiary',
      skills: [
        { name: 'Angular 22 (Zoneless)', category: 'Core' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Angular Signals & RxJS', category: 'State' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Clean Architecture UI', category: 'Design' },
        { name: 'Acessibilidade & SEO', category: 'UX' },
      ],
    },
    {
      titleKey: 'stack.backend_title',
      subtitleKey: 'stack.backend_sub',
      icon: 'terminal',
      colorClass: 'text-primary',
      skills: [
        { name: 'Java 21 LTS', category: 'Core' },
        { name: 'Quarkus 3 & Spring Boot', category: 'Framework' },
        { name: 'Hibernate ORM / Panache', category: 'Data' },
        { name: 'APIs RESTful & WebSockets', category: 'Network' },
        { name: 'Autenticação JWT / OAuth2', category: 'Auth' },
        { name: 'Virtual Threads (Loom)', category: 'Scale' },
      ],
    },
    {
      titleKey: 'stack.devops_title',
      subtitleKey: 'stack.devops_sub',
      icon: 'database',
      colorClass: 'text-secondary',
      skills: [
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Docker & Docker Compose', category: 'Containers' },
        { name: 'GitHub Actions CI/CD', category: 'Pipelines' },
        { name: 'Linux Containers', category: 'Infra' },
        { name: 'Deploy Cloud / Pages', category: 'Deploy' },
        { name: 'Redis (Caching)', category: 'Cache' },
      ],
    },
    {
      titleKey: 'stack.practices_title',
      subtitleKey: 'stack.practices_sub',
      icon: 'verified',
      colorClass: 'text-accent-peach',
      skills: [
        { name: 'Clean Code & SOLID', category: 'Standard' },
        { name: 'Testes Unitários (Vitest)', category: 'Testing' },
        { name: 'Design Patterns', category: 'Architecture' },
        { name: 'Metodologias Ágeis (Scrum)', category: 'Process' },
        { name: 'Git & Code Review', category: 'Collab' },
        { name: 'Documentação OpenAPI', category: 'API Docs' },
      ],
    },
  ];
}
