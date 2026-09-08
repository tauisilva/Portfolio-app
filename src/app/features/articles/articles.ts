import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="pt-space-xl pb-space-3xl" id="artigos">
      <div class="relative bg-surface border border-secondary/30 rounded-xl p-space-xl lg:p-space-2xl shadow-sm overflow-hidden">
        <div class="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl">
          <div class="flex flex-col max-w-3xl">
            <!-- Eyebrow Tags -->
            <div class="inline-flex items-center gap-2 mb-space-sm">
              <span class="px-2.5 py-0.5 rounded font-label-mono text-[10px] bg-secondary/15 text-secondary border border-secondary/30 font-semibold">
                {{ 'articles.badge' | translate }}
              </span>
              <span class="font-label-mono text-xs text-primary uppercase tracking-wider font-semibold">
                {{ 'articles.eyebrow' | translate }}
              </span>
            </div>

            <!-- Article Title -->
            <h3 class="font-headline-xl text-xl lg:text-2xl text-on-surface font-bold leading-snug">
              Personalizando o Swagger UI no Java &amp; Quarkus: Como Aplicar um Tema Dark Sem Quebrar Endpoints
            </h3>

            <!-- Article Summary -->
            <p class="font-body-base text-xs lg:text-sm text-on-surface-variant mt-2 leading-relaxed">
              Guia arquitetural demonstrando como injetar estilos CSS customizados no Swagger/OpenAPI sem impactar
              telemetria, contratos v3 ou as rotas vitais de documentação de microsserviços.
            </p>

            <!-- Metrics / Read Stats -->
            <div class="flex flex-wrap items-center gap-space-md mt-space-md font-label-mono text-xs text-on-surface-variant">
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[15px] text-tertiary">schedule</span>
                <span>{{ 'articles.read_time' | translate }}</span>
              </div>
              <span class="text-outline-variant">•</span>
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[15px] text-primary">visibility</span>
                <span>{{ 'articles.views' | translate }}</span>
              </div>
              <span class="text-outline-variant">•</span>
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[15px] text-accent-peach">favorite</span>
                <span>{{ 'articles.reactions' | translate }}</span>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="shrink-0 w-full lg:w-auto">
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-headline-sm text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              <span>{{ 'articles.read_more' | translate }}</span>
              <span class="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Articles {}
