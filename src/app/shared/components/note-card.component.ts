import { Component, input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicalNote } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-note-card',
  standalone: true,
  template: `
    <article class="note-card" 
             (click)="navigateToNote()"
             (keydown.enter)="navigateToNote()"
             (keydown.space)="$event.preventDefault(); navigateToNote()"
             tabindex="0"
             role="link"
             [attr.aria-label]="lang() === 'es' ? 'Leer artículo técnico: ' + note().title[lang()] : 'Read technical article: ' + note().title[lang()]">
      <div class="note-header">
        <span class="note-category">{{ note().category[lang()] }}</span>
        <span class="note-date-time">{{ note().date }} · {{ note().readTime[lang()] }}</span>
      </div>
      <h3 class="note-title">{{ note().title[lang()] }}</h3>
      <p class="note-excerpt">{{ note().excerpt[lang()] }}</p>
      <div class="note-action">
        <span>{{ lang() === 'es' ? 'Leer artículo' : 'Read article' }}</span>
        <span class="arrow">→</span>
      </div>
    </article>
  `,
  styles: [`
    .note-card {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 26px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    .note-card::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--accent);
      transform: scaleY(0);
      transition: transform 0.3s var(--ease);
      transform-origin: bottom;
    }
    .note-card:hover::before,
    .note-card:focus-visible::before {
      transform: scaleY(1);
    }
    .note-card:hover,
    .note-card:focus-visible {
      border-color: var(--line-2);
      transform: translateY(-2px);
      box-shadow: 0 12px 24px -10px rgba(0,0,0,.3);
    }
    .note-card:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 4px;
    }
    [data-theme="light"] .note-card:hover,
    [data-theme="light"] .note-card:focus-visible {
      box-shadow: 0 12px 24px -10px rgba(15, 34, 52, 0.08);
    }
    .note-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
      flex-wrap: wrap;
      gap: 10px;
    }
    .note-category {
      font-family: "JetBrains Mono", monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .note-date-time {
      font-family: "JetBrains Mono", monospace;
      font-size: 11.5px;
      color: var(--mute);
    }
    .note-title {
      font-family: "Bricolage Grotesque", sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: var(--text);
      line-height: 1.3;
      margin-bottom: 10px;
    }
    .note-excerpt {
      color: var(--dim);
      font-size: 14.5px;
      line-height: 1.55;
      margin-bottom: 20px;
      flex-grow: 1;
    }
    .note-action {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: "JetBrains Mono", monospace;
      font-size: 12.5px;
      color: var(--accent);
      font-weight: 700;
      margin-top: auto;
    }
    .note-action .arrow {
      transition: transform 0.25s var(--ease);
    }
    .note-card:hover .note-action .arrow {
      transform: translateX(4px);
    }
  `]
})
export class NoteCardComponent {
  note = input.required<TechnicalNote>();
  lang = input.required<'es' | 'en'>();
  
  private router = inject(Router);

  navigateToNote() {
    this.router.navigate(['/notes', this.note().slug]);
  }
}
