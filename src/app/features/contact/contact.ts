import { Component, signal } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="pt-space-2xl pb-space-4xl" id="contato">
      <!-- Section Header -->
      <div class="flex flex-col max-w-2xl mb-space-xl">
        <div class="inline-flex items-center gap-2 mb-2">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="font-label-mono text-xs text-primary uppercase tracking-wider font-semibold">
            {{ 'contact.eyebrow' | translate }}
          </span>
        </div>
        <h2 class="font-headline-xl text-2xl lg:text-3xl text-on-surface font-bold tracking-tight">
          {{ 'contact.title' | translate }}
        </h2>
        <p class="font-body-base text-sm lg:text-base text-on-surface-variant mt-1.5 leading-relaxed">
          {{ 'contact.subtitle' | translate }}
        </p>
      </div>

      <!-- Humanized Recruiter Contact Cards Grid (4 Channels) -->
      @if (!showTerminal()) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <!-- Card 1: Email -->
          <div class="bg-surface border border-outline-variant rounded-2xl p-space-lg shadow-sm hover:border-primary/50 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-3">
                <span class="material-symbols-outlined text-[22px]">mail</span>
              </div>
              <h3 class="font-headline-sm text-sm font-bold text-on-surface">
                {{ 'contact.email_title' | translate }}
              </h3>
              <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                {{ 'contact.email_desc' | translate }}
              </p>
            </div>

            <div class="pt-4 mt-4 border-t border-outline-variant flex flex-col gap-2">
              <button
                type="button"
                (click)="copyEmail()"
                class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant hover:border-primary/50 text-on-surface font-label-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span class="material-symbols-outlined text-[15px]">
                  {{ copied() ? 'check' : 'content_copy' }}
                </span>
                <span>{{ copied() ? ('contact.email_copied' | translate) : ('contact.email_val' | translate) }}</span>
              </button>
              <a
                href="mailto:taui.dev@gmail.com"
                class="w-full px-3 py-2 rounded-lg bg-primary text-on-primary font-headline-sm text-xs font-semibold flex items-center justify-center gap-1 hover:bg-primary/90 transition-colors shadow-sm text-center"
              >
                <span>{{ 'contact.email_cta' | translate }}</span>
                <span class="material-symbols-outlined text-[14px]">send</span>
              </a>
            </div>
          </div>

          <!-- Card 2: LinkedIn -->
          <div class="bg-surface border border-outline-variant rounded-2xl p-space-lg shadow-sm hover:border-secondary/50 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-3">
                <span class="material-symbols-outlined text-[22px]">share</span>
              </div>
              <h3 class="font-headline-sm text-sm font-bold text-on-surface">
                {{ 'contact.linkedin_title' | translate }}
              </h3>
              <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                {{ 'contact.linkedin_desc' | translate }}
              </p>
            </div>

            <div class="pt-4 mt-4 border-t border-outline-variant">
              <a
                href="https://linkedin.com/in/tauisilva"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full px-3 py-2 rounded-lg bg-secondary text-on-secondary font-headline-sm text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-secondary/90 transition-colors shadow-sm"
              >
                <span>{{ 'contact.linkedin_cta' | translate }}</span>
                <span class="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </div>
          </div>

          <!-- Card 3: Download Resume (PDF) -->
          <div class="bg-surface border border-outline-variant rounded-2xl p-space-lg shadow-sm hover:border-tertiary/50 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-tertiary/15 text-tertiary flex items-center justify-center mb-3">
                <span class="material-symbols-outlined text-[22px]">description</span>
              </div>
              <h3 class="font-headline-sm text-sm font-bold text-on-surface">
                {{ 'contact.resume_title' | translate }}
              </h3>
              <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                {{ 'contact.resume_desc' | translate }}
              </p>
            </div>

            <div class="pt-4 mt-4 border-t border-outline-variant">
              <a
                href="https://linkedin.com/in/tauisilva"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant hover:border-tertiary/60 text-on-surface font-headline-sm text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span class="material-symbols-outlined text-[16px] text-tertiary">download</span>
                <span>{{ 'contact.resume_cta' | translate }}</span>
              </a>
            </div>
          </div>

          <!-- Card 4: WhatsApp / Direct Message -->
          <div class="bg-surface border border-outline-variant rounded-2xl p-space-lg shadow-sm hover:border-accent-peach/50 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-accent-peach/15 text-accent-peach flex items-center justify-center mb-3">
                <span class="material-symbols-outlined text-[22px]">chat</span>
              </div>
              <h3 class="font-headline-sm text-sm font-bold text-on-surface">
                {{ 'contact.whatsapp_title' | translate }}
              </h3>
              <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                {{ 'contact.whatsapp_desc' | translate }}
              </p>
            </div>

            <div class="pt-4 mt-4 border-t border-outline-variant">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant hover:border-accent-peach/60 text-on-surface font-headline-sm text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span class="material-symbols-outlined text-[16px] text-accent-peach">forum</span>
                <span>{{ 'contact.whatsapp_cta' | translate }}</span>
              </a>
            </div>
          </div>
        </div>
      } @else {
        <!-- Optional Technical CLI Terminal View -->
        <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-xl overflow-hidden">
          <!-- Terminal Window Title Bar -->
          <div class="bg-surface border-b border-outline-variant px-4 py-2.5 flex items-center justify-between rounded-t-2xl">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="font-mono text-xs text-on-surface-variant ml-3 font-medium">
                bash — session: taui-fullstack-core
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span class="font-label-mono text-[10px] text-primary uppercase font-bold">
                {{ 'contact.pod_status' | translate }}
              </span>
            </div>
          </div>

          <!-- Terminal Body -->
          <div class="p-space-lg font-mono text-xs space-y-3 text-on-surface-variant bg-surface-container-low">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-primary font-bold">taui&#64;fullstack-engineer</span>
              <span>:</span>
              <span class="text-secondary font-bold">~</span>
              <span>$</span>
              <span class="text-on-surface font-medium">
                echo "{{ 'contact.terminal_msg' | translate }}"
              </span>
            </div>
            <div class="text-primary font-semibold pl-4">
              &gt; {{ 'contact.terminal_msg' | translate }}
            </div>

            <div class="flex flex-wrap items-center gap-2 pt-1">
              <span class="text-primary font-bold">taui&#64;fullstack-engineer</span>
              <span>:</span>
              <span class="text-secondary font-bold">~</span>
              <span>$</span>
              <span class="text-on-surface font-medium">systemctl status fullstack-services.target</span>
            </div>

            <div class="bg-surface border border-outline-variant p-space-md rounded-lg space-y-1 text-[11px] text-on-surface-variant shadow-sm">
              <div class="font-semibold text-on-surface">• fullstack-services.target - Taui Silva Full Stack Runtime</div>
              <div class="text-primary font-medium">   Loaded: loaded (/etc/systemd/system/taui-fullstack.service; active)</div>
              <div class="text-primary font-medium">   Active: active (running) • Frontend SPA (Angular 22) + API (Quarkus 3)</div>
              <div>   Status: "Angular SSR + Quarkus Reactive Gateway healthy • Latency 14ms"</div>
            </div>

            <div class="flex items-center gap-2 pt-1 text-on-surface">
              <span class="text-primary font-bold">taui&#64;fullstack-engineer</span>
              <span>:</span>
              <span class="text-secondary font-bold">~</span>
              <span>$</span>
              <span class="w-2 h-4 bg-primary inline-block animate-pulse"></span>
            </div>
          </div>
        </div>
      }

      <!-- Bottom Secondary Toggle -->
      <div class="mt-space-lg flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-outline-variant text-xs font-label-mono text-on-surface-variant">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>{{ 'contact.operational' | translate }}</span>
        </div>
        <button
          type="button"
          (click)="toggleTerminal()"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-outline-variant hover:border-primary/50 text-on-surface font-semibold transition-colors"
        >
          <span class="material-symbols-outlined text-[16px] text-primary">terminal</span>
          <span>{{ (showTerminal() ? 'contact.toggle_human' : 'contact.toggle_terminal') | translate }}</span>
        </button>
      </div>
    </section>
  `,
})
export class Contact {
  protected readonly showTerminal = signal(false);
  protected readonly copied = signal(false);

  toggleTerminal(): void {
    this.showTerminal.update((v) => !v);
  }

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('taui.dev@gmail.com');
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    }
  }
}
