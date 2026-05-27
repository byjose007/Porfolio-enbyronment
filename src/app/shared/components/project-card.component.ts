import { Component, input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../core/models/portfolio.model';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <article class="card reveal in" 
             (click)="navigateToCaseStudy()"
             (keydown.enter)="navigateToCaseStudy()"
             (keydown.space)="$event.preventDefault(); navigateToCaseStudy()"
             tabindex="0"
             role="link"
             [attr.aria-label]="lang() === 'es' ? 'Ver caso de estudio de ' + project().title[lang()] : 'View case study for ' + project().title[lang()]">
      <div class="card-viz">
        <span class="card-tag">{{ project().tag[lang()] }}</span>
        <span class="card-no">{{ project().number }}</span>
        

        
        <div class="metric">
          <div class="num">{{ project().metricNum }}</div>
          <div class="lbl">{{ project().metricLabel[lang()] }}</div>
        </div>
      </div>
      
      <div class="card-body">
        <div class="client">{{ project().client }}</div>
        <h3>
          {{ project().title[lang()] }}
          @if (hasCaseStudy()) {
            <span style="font-size: 13px; font-weight: normal; color: var(--accent); opacity: 0.85;">
              {{ lang() === 'es' ? '↗ ver caso' : '↗ view study' }}
            </span>
          }
        </h3>
        <p>{{ project().description[lang()] }}</p>
        <div class="stack">
          @for (tech of project().stack; track tech) {
            <span>{{ tech }}</span>
          }
        </div>
      </div>
    </article>
  `,
  styles: [`
    .card {
      transition: all 0.4s var(--ease);
    }
    .card:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 4px;
      transform: translateY(-6px);
      box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.6);
    }
    [data-theme="light"] .card:focus-visible {
      box-shadow: 0 30px 60px -30px rgba(15, 34, 52, 0.15);
    }
  `]
})
export class ProjectCardComponent {
  project = input.required<Project>();
  lang = input.required<'es' | 'en'>();
  
  private router = inject(Router);

  hasCaseStudy(): boolean {
    const id = this.project().id;
    return id === 'vy-vortex' || id === 'pegasi';
  }

  navigateToCaseStudy() {
    if (this.hasCaseStudy()) {
      this.router.navigate(['/case-studies', this.project().id]);
    }
  }
}
