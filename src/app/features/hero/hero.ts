import { Component, signal } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="relative z-10 pt-space-xl pb-space-3xl" id="inicio">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <!-- Hero Left Column (7 cols): Recruiter & Technical Presentation -->
        <div class="lg:col-span-7 flex flex-col items-start">
          <!-- Availability & Seniority Badge -->
          <div
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant text-primary shadow-sm text-xs font-label-mono"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span class="tracking-wide font-semibold">
              {{ 'hero.status_badge' | translate }}
            </span>
          </div>

          <!-- Hero Headline -->
          <h1 class="font-display-hero text-3xl lg:text-[42px] font-bold text-on-surface mt-space-md tracking-tight leading-[1.2]">
            {{ 'hero.headline_prefix' | translate }}
            <span class="text-primary font-bold">{{ 'hero.headline_pixel' | translate }}</span>
            {{ 'hero.headline_to' | translate }}
            <span class="text-secondary font-bold">{{ 'hero.headline_database' | translate }}</span>
          </h1>

          <!-- Hero Executive Subtitle -->
          <p class="font-body-base text-base text-on-surface-variant mt-space-md max-w-2xl leading-relaxed">
            {{ 'hero.subtitle' | translate }}
          </p>

          <!-- Primary CTAs (Recruiter First) -->
          <div class="flex flex-wrap items-center gap-3 mt-space-xl">
            <!-- Download CV / Contact CTA -->
            <a
              href="#contato"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary font-headline-sm text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              <span class="material-symbols-outlined text-[18px]">description</span>
              <span>{{ 'hero.cta_download_cv' | translate }}</span>
            </a>

            <!-- View Projects CTA -->
            <a
              href="#projetos"
              class="inline-flex items-center gap-2 px-4 py-2.5 bg-surface border border-outline-variant hover:border-outline text-on-surface font-headline-sm text-sm font-semibold rounded-lg transition-all shadow-sm"
            >
              <span>{{ 'hero.cta_projects' | translate }}</span>
              <span class="material-symbols-outlined text-[16px] text-tertiary">south</span>
            </a>

            <!-- Quick Direct Social Links -->
            <div class="flex items-center gap-2 pl-1">
              <a
                href="https://linkedin.com/in/tauisilva"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-lg bg-surface border border-outline-variant hover:border-secondary/60 text-on-surface-variant hover:text-secondary flex items-center justify-center transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <span class="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a
                href="https://github.com/tauisilva"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-lg bg-surface border border-outline-variant hover:border-primary/60 text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <span class="material-symbols-outlined text-[20px]">code</span>
              </a>
              <a
                href="mailto:taui.dev@gmail.com"
                class="w-10 h-10 rounded-lg bg-surface border border-outline-variant hover:border-accent-peach/60 text-on-surface-variant hover:text-accent-peach flex items-center justify-center transition-colors shadow-sm"
                aria-label="Send Direct Email"
                title="Email"
              >
                <span class="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>

          <!-- Quick Career Metrics Grid (Scannable for Recruiters) -->
          <div class="grid grid-cols-3 gap-space-md w-full max-w-xl mt-space-2xl bg-surface border border-outline-variant rounded-xl p-space-md shadow-sm">
            <div class="flex flex-col">
              <span class="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-semibold">
                {{ 'hero.metrics.exp_label' | translate }}
              </span>
              <span class="font-headline-lg text-lg lg:text-xl font-bold text-accent-peach mt-0.5">
                {{ 'hero.metrics.exp_val' | translate }}
              </span>
              <span class="font-label-mono text-[11px] text-on-surface-variant">
                {{ 'hero.metrics.exp_sub' | translate }}
              </span>
            </div>
            <div class="flex flex-col border-l border-outline-variant pl-4">
              <span class="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-semibold">
                {{ 'hero.metrics.uptime_label' | translate }}
              </span>
              <span class="font-headline-lg text-lg lg:text-xl font-bold text-primary mt-0.5">
                {{ 'hero.metrics.uptime_val' | translate }}
              </span>
              <span class="font-label-mono text-[11px] text-on-surface-variant">
                {{ 'hero.metrics.uptime_sub' | translate }}
              </span>
            </div>
            <div class="flex flex-col border-l border-outline-variant pl-4">
              <span class="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-semibold">
                {{ 'hero.metrics.arch_label' | translate }}
              </span>
              <span class="font-headline-lg text-lg lg:text-xl font-bold text-secondary mt-0.5">
                {{ 'hero.metrics.arch_val' | translate }}
              </span>
              <span class="font-label-mono text-[11px] text-on-surface-variant">
                {{ 'hero.metrics.arch_sub' | translate }}
              </span>
            </div>
          </div>
        </div>

        <!-- Hero Right Column: Professional Profile & Interactive Value Card (5 cols) -->
        <div class="lg:col-span-5 flex flex-col gap-3">
          <div class="bg-surface border border-outline-variant rounded-2xl shadow-xl overflow-hidden transition-all">
            <!-- Profile Card Top Banner -->
            <div class="bg-surface-container-low p-space-md border-b border-outline-variant flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-headline-lg font-bold text-xl shadow-md">
                TS
              </div>
              <div class="flex flex-col">
                <div class="flex items-center gap-2">
                  <h2 class="font-headline-sm text-base font-bold text-on-surface">
                    {{ 'hero.profile_card.name' | translate }}
                  </h2>
                  <span class="material-symbols-outlined text-primary text-[18px]" title="Verified Full Stack Profile">verified</span>
                </div>
                <span class="font-label-mono text-xs text-secondary font-semibold">
                  {{ 'hero.profile_card.role' | translate }}
                </span>
                <span class="font-body-sm text-xs text-on-surface-variant mt-0.5 flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px]">location_on</span>
                  {{ 'hero.profile_card.location' | translate }}
                </span>
              </div>
            </div>

            <!-- Interactive Dual-View Tab Switcher -->
            <div class="px-space-md pt-space-sm border-b border-outline-variant bg-surface-container-lowest/50 flex items-center gap-2">
              <button
                type="button"
                (click)="setActiveTab('business')"
                [class.border-primary]="activeTab() === 'business'"
                [class.text-primary]="activeTab() === 'business'"
                [class.font-bold]="activeTab() === 'business'"
                [class.border-transparent]="activeTab() !== 'business'"
                [class.text-on-surface-variant]="activeTab() !== 'business'"
                class="pb-2.5 px-2 text-xs font-label-mono border-b-2 transition-all flex items-center gap-1.5"
              >
                <span class="material-symbols-outlined text-[16px]">work</span>
                <span>{{ 'hero.profile_card.tab_business' | translate }}</span>
              </button>
              <button
                type="button"
                (click)="setActiveTab('tech')"
                [class.border-secondary]="activeTab() === 'tech'"
                [class.text-secondary]="activeTab() === 'tech'"
                [class.font-bold]="activeTab() === 'tech'"
                [class.border-transparent]="activeTab() !== 'tech'"
                [class.text-on-surface-variant]="activeTab() !== 'tech'"
                class="pb-2.5 px-2 text-xs font-label-mono border-b-2 transition-all flex items-center gap-1.5"
              >
                <span class="material-symbols-outlined text-[16px]">schema</span>
                <span>{{ 'hero.profile_card.tab_tech' | translate }}</span>
              </button>
            </div>

            <!-- Tab Content 1: Business & Recruiter Value -->
            @if (activeTab() === 'business') {
              <div class="p-space-md space-y-3">
                <span class="font-label-mono text-[11px] text-primary uppercase font-bold tracking-wider block">
                  {{ 'hero.profile_card.business_title' | translate }}
                </span>

                <!-- Value Pillar 1 -->
                <div class="flex items-start gap-3 p-2.5 rounded-xl bg-surface-container-low border border-outline-variant">
                  <div class="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[18px]">rocket_launch</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-headline-sm text-xs font-bold text-on-surface">
                      {{ 'hero.profile_card.business_item1_title' | translate }}
                    </span>
                    <span class="font-body-sm text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                      {{ 'hero.profile_card.business_item1_desc' | translate }}
                    </span>
                  </div>
                </div>

                <!-- Value Pillar 2 -->
                <div class="flex items-start gap-3 p-2.5 rounded-xl bg-surface-container-low border border-outline-variant">
                  <div class="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[18px]">touch_app</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-headline-sm text-xs font-bold text-on-surface">
                      {{ 'hero.profile_card.business_item2_title' | translate }}
                    </span>
                    <span class="font-body-sm text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                      {{ 'hero.profile_card.business_item2_desc' | translate }}
                    </span>
                  </div>
                </div>

                <!-- Value Pillar 3 -->
                <div class="flex items-start gap-3 p-2.5 rounded-xl bg-surface-container-low border border-outline-variant">
                  <div class="w-8 h-8 rounded-lg bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[18px]">forum</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-headline-sm text-xs font-bold text-on-surface">
                      {{ 'hero.profile_card.business_item3_title' | translate }}
                    </span>
                    <span class="font-body-sm text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                      {{ 'hero.profile_card.business_item3_desc' | translate }}
                    </span>
                  </div>
                </div>
              </div>
            } @else {
              <!-- Tab Content 2: Technical Architecture Flow -->
              <div class="p-space-md space-y-2.5">
                <!-- Frontend Flow -->
                <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-label-mono text-[11px] text-tertiary font-bold flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-[14px]">desktop_windows</span>
                      Client Tier
                    </span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-label-mono bg-tertiary/15 text-tertiary font-semibold">
                      Zoneless
                    </span>
                  </div>
                  <p class="font-body-sm text-xs text-on-surface m-0">
                    {{ 'hero.profile_card.tech_flow_client' | translate }}
                  </p>
                </div>

                <!-- Live Connection Stream -->
                <div class="flex items-center justify-between px-3 py-1.5 rounded-lg bg-surface-container border border-dashed border-outline-variant text-[11px] font-label-mono">
                  <span class="text-secondary font-semibold flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    REST Reactive / SSE
                  </span>
                  <span class="text-primary font-bold">
                    &lt; 15ms latency
                  </span>
                </div>

                <!-- Backend Flow -->
                <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-label-mono text-[11px] text-primary font-bold flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-[14px]">dns</span>
                      Cloud Native API
                    </span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-label-mono bg-primary/10 text-primary font-semibold">
                      GraalVM AOT
                    </span>
                  </div>
                  <p class="font-body-sm text-xs text-on-surface m-0">
                    {{ 'hero.profile_card.tech_flow_api' | translate }}
                  </p>
                </div>

                <!-- Database Flow -->
                <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-label-mono text-[11px] text-secondary font-bold flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-[14px]">database</span>
                      Persistence Layer
                    </span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-label-mono bg-secondary/15 text-secondary font-semibold">
                      PostgreSQL
                    </span>
                  </div>
                  <p class="font-body-sm text-xs text-on-surface m-0">
                    {{ 'hero.profile_card.tech_flow_db' | translate }}
                  </p>
                </div>
              </div>
            }

            <!-- Profile Card Bottom Status Bar -->
            <div class="bg-surface-container-low px-4 py-2.5 flex items-center justify-between border-t border-outline-variant text-xs font-label-mono">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span class="text-[11px] text-primary font-semibold">
                  {{ 'hero.profile_card.availability' | translate }}
                </span>
              </div>
              <span class="text-[11px] text-on-surface-variant font-medium">
                {{ 'hero.profile_card.tech_flow_telemetry' | translate }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Hero {
  protected readonly activeTab = signal<'business' | 'tech'>('business');

  setActiveTab(tab: 'business' | 'tech'): void {
    this.activeTab.set(tab);
  }
}
