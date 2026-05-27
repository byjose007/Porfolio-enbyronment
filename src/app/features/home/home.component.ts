import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { ContentService } from '../../core/services/content.service';
import { ProjectCardComponent } from '../../shared/components/project-card.component';
import { NoteCardComponent } from '../../shared/components/note-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProjectCardComponent,
    NoteCardComponent
  ],
  template: `
    <header class="hero" id="top" (pointermove)="onPointerMove($event)">
      <div class="hero-net">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--line)" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div class="hero-spot" [style.--mx]="spotX()" [style.--my]="spotY()"></div>
      
      <div class="wrap">

        <h1 class="hero-title">
          <span class="ln"><span>{{ t().hero.titlePart1 }}</span></span>
          <span class="ln"><span class="gr">{{ t().hero.titlePart2 }}</span></span>
        </h1>
        
        <div class="hero-sub">
          <span class="role-tag"><em>{{ t().hero.role2 }}</em></span>
        </div>
        
        <p class="hero-desc">
          {{ t().hero.descPart1 }}<strong>{{ t().hero.descStrong }}</strong>{{ t().hero.descPart2 }}
        </p>
        
        <div class="hero-actions">
          <a class="btn btn-primary" [routerLink]="['/']" fragment="work">
            {{ t().hero.ctaPrimary }}
          </a>
          <a class="btn btn-ghost" href="CV_Byron-Frontend.pdf" target="_blank">
            {{ t().hero.ctaSecondary }} <span class="arrow">→</span>
          </a>
        </div>
        
      </div>
    </header>

    <!-- CAPABILITIES MARQUEE LOOP -->
    <section class="caps" id="stack">
      <div class="caps-track">
        @for (cap of caps; track $index) {
          <span class="cap"><span class="d"></span>{{ cap }}</span>
        }
        @for (cap of caps; track $index + '-repeat') {
          <span class="cap"><span class="d"></span>{{ cap }}</span>
        }
      </div>
    </section>

    <!-- SELECTED WORK PROJECTS -->
    @defer (on viewport) {
      <section id="work">
        <div class="wrap">
          <div class="sec-head reveal in">
            <div class="sec-kicker">{{ t().sections.workKicker }}</div>
            <h2 class="sec-title">
              {{ t().sections.workTitle }}<span class="accent">{{ t().sections.workTitleAccent }}</span>
            </h2>
          </div>
          
          <div class="grid">
            @for (proj of projects; track proj.id) {
              <app-project-card [project]="proj" [lang]="currentLang()"></app-project-card>
            }
          </div>
        </div>
      </section>
    } @placeholder {
      <section id="work-placeholder" style="padding: 90px 0;">
        <div class="wrap">
          <div class="sec-head" style="opacity: 0.15;">
            <div class="sec-kicker" style="width: 150px; height: 16px; background: var(--line-2); border-radius: 4px; display: inline-block;"></div>
            <div class="sec-title" style="width: 300px; height: 48px; background: var(--line-2); border-radius: 8px; margin-top: 10px;"></div>
          </div>
          <div class="grid">
            <div class="card skeleton-card" style="height: 380px; background: var(--surface); border: 1px solid var(--line); border-radius: 18px;"></div>
            <div class="card skeleton-card" style="height: 380px; background: var(--surface); border: 1px solid var(--line); border-radius: 18px;"></div>
          </div>
        </div>
      </section>
    }

    <!-- EXPERIENCE TRAJECTORY TIMELINE -->
    <section id="experience">
      <div class="wrap">
        <div class="sec-head reveal in">
          <div class="sec-kicker">{{ t().sections.trajectoryKicker }}</div>
          <h2 class="sec-title">
            {{ t().sections.trajectoryTitle }}<span class="accent">{{ t().sections.trajectoryTitleAccent }}</span>
          </h2>
        </div>
        
        <div class="tl reveal in">
          @for (exp of experiences; track exp.company + exp.period) {
            <div class="tl-item" [class.dim]="exp.dim">
              <div class="tl-top">
                <span class="tl-role">{{ exp.role[currentLang()] }}</span>
                <span class="tl-yr">{{ exp.period }}</span>
              </div>
              <div class="tl-co">
                {{ exp.company }} 
                @if (exp.companySub) {
                  <span class="badge">{{ exp.companySub }}</span>
                }
              </div>
              <div class="tl-desc">{{ exp.description[currentLang()] }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- THE ENVIRONMENT ABOUT -->
    <section id="about">
      <div class="wrap">
        <div class="about">
          <div class="about-txt reveal in">
            <div class="sec-kicker">{{ t().sections.aboutKicker }}</div>
            <h2 class="sec-title" style="margin-bottom:30px">
              {{ t().sections.aboutTitle }}<span class="accent">{{ t().sections.aboutTitleAccent }}</span>
            </h2>
            <p [innerHTML]="t().sections.aboutP1"></p>
            <p [innerHTML]="t().sections.aboutP2"></p>
          </div>
          
          <div class="reveal in">
            <!-- Profile Photo with strict aspect ratio preservation to avoid head cropping -->
            <div class="profile-wrapper" style="margin-bottom: 28px; border-radius: 50%; border: 1px solid var(--line-2); background: var(--surface-2); padding: 8px; display: flex; justify-content: center; align-items: center; box-shadow: 0 15px 35px -15px rgba(0,0,0,0.3); width: 280px; height: 280px; max-width: 100%; aspect-ratio: 1 / 1; margin-left: auto; margin-right: auto;">
              <img src="profile-photo.png" alt="Byron Armijos" style="width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 50%;" />
            </div>

          
            
            <div class="sectors">
              <div class="k">{{ t().sections.sectorsTitle }}</div>
              <div class="row">
                @for (sec of t().sections.sectors; track sec) {
                  <span>{{ sec }}</span>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TECHNICAL NOTES -->
    @defer (on viewport) {
      <section id="notes" style="border-top: 1px solid var(--line); background: var(--bg-2)">
        <div class="wrap">
          <div class="sec-head reveal in">
            <div class="sec-kicker">{{ currentLang() === 'es' ? 'NOTAS' : 'TECHNICAL NOTES' }}</div>
            <h2 class="sec-title">
              {{ t().sections.notesTitle }}<span class="accent">{{ t().sections.notesTitleAccent }}</span>
            </h2>
          </div>
          
          <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
            @for (note of notes; track note.id) {
              <app-note-card [note]="note" [lang]="currentLang()"></app-note-card>
            }
          </div>
        </div>
      </section>
    } @placeholder {
      <section id="notes-placeholder" style="padding: 90px 0; background: var(--bg-2); border-top: 1px solid var(--line);">
        <div class="wrap">
          <div class="sec-head" style="opacity: 0.15;">
            <div class="sec-kicker" style="width: 100px; height: 16px; background: var(--line-2); border-radius: 4px; display: inline-block;"></div>
            <div class="sec-title" style="width: 250px; height: 48px; background: var(--line-2); border-radius: 8px; margin-top: 10px;"></div>
          </div>
          <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
            <div class="note-card skeleton-note" style="height: 250px; background: var(--surface); border: 1px solid var(--line); border-radius: 14px;"></div>
            <div class="note-card skeleton-note" style="height: 250px; background: var(--surface); border: 1px solid var(--line); border-radius: 14px;"></div>
            <div class="note-card skeleton-note" style="height: 250px; background: var(--surface); border: 1px solid var(--line); border-radius: 14px;"></div>
          </div>
        </div>
      </section>
    }

    <!-- CONTACT CHANNELS -->
    <section id="contact" class="contact">
      <div class="wrap reveal in">
        <div class="sec-kicker">
          <span class="live" style="display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--accent);margin-right:8px"></span>
          {{ t().sections.contactKicker }}
        </div>
        <h2>
          {{ t().sections.contactTitle1 }}<br><span class="gr">{{ t().sections.contactTitle2 }}</span>
        </h2>
        <p>{{ t().sections.contactDesc }}</p>
        <a class="mailbtn" href="mailto:byjose007&#64;gmail.com">byjose007&#64;gmail.com</a>
        
        <div class="clinks">
       
          <a class="clink" [routerLink]="['/']" fragment="top">
            {{ t().sections.contactTop }}
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  readonly languageService = inject(LanguageService);
  private contentService = inject(ContentService);
  
  spotX = signal('70%');
  spotY = signal('30%');

  readonly caps = [
    'Angular 19', 'TypeScript', 'Signals', 'RxJS', 'NgRx', 'Micro-Frontends', 'Standalone Components',
    'NestJS BFF', 'Node.js', 'Python', 'WebSockets', 'Tailwind', 'Angular Material', 'Design Systems', 'WCAG 2.1 AA',
    'Figma → Prod', 'Jest', 'Azure CI/CD', 'AI-Assisted Dev', 'Spec-Driven Dev', 'MongoDB', 'PostgreSQL'
  ];

  projects = this.contentService.projects;
  experiences = this.contentService.experiences;
  notes = this.contentService.technicalNotes;

  currentLang = () => this.languageService.currentLang();
  t = () => this.contentService.translations[this.languageService.currentLang()];

  ngOnInit() {
    // Initial loading actions if needed
  }

  onPointerMove(event: PointerEvent) {
    const heroEl = event.currentTarget as HTMLElement;
    if (heroEl) {
      const rect = heroEl.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width * 100) + '%';
      const y = ((event.clientY - rect.top) / rect.height * 100) + '%';
      this.spotX.set(x);
      this.spotY.set(y);
    }
  }
}
