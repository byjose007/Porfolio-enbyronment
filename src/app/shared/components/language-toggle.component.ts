import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  template: `
    <div class="lang-switch" aria-label="Selector de idioma">
      <button (click)="languageService.setLanguage('es')" [class.active]="languageService.currentLang() === 'es'" aria-label="Idioma Español">ES</button>
      <button (click)="languageService.setLanguage('en')" [class.active]="languageService.currentLang() === 'en'" aria-label="Idioma Inglés">EN</button>
    </div>
  `,
  styles: [`
    .lang-switch {
      display: inline-flex;
      background: var(--bg-2);
      border: 1px solid var(--line);
      padding: 3px;
      border-radius: 9px;
      gap: 2px;
    }
    button {
      background: none;
      border: none;
      color: var(--mute);
      font-family: "JetBrains Mono", monospace;
      font-size: 11px;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.25s var(--ease);
    }
    button:hover {
      color: var(--text);
    }
    button.active {
      background: var(--surface-2);
      color: var(--accent);
      box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.2);
    }
    [data-theme="light"] button.active {
      box-shadow: 0 2px 8px -2px rgba(15, 34, 52, 0.1);
    }
  `]
})
export class LanguageToggleComponent {
  readonly languageService = inject(LanguageService);
}
