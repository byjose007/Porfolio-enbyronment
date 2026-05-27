import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button (click)="themeService.toggleTheme()" class="theme-btn" [attr.aria-label]="themeService.theme() === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'">
      @if (themeService.theme() === 'dark') {
        <!-- Sun Icon -->
        <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>
      } @else {
        <!-- Moon Icon -->
        <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      }
    </button>
  `,
  styles: [`
    .theme-btn {
      background: none;
      border: 1px solid var(--line-2);
      color: var(--text);
      width: 40px;
      height: 40px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.28s var(--ease);
    }
    .theme-btn:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-1px);
      box-shadow: 0 0 16px -4px var(--glow);
    }
    svg {
      width: 20px;
      height: 20px;
      stroke-linecap: round;
      stroke-linejoin: round;
      animation: rotate-in 0.4s var(--ease);
    }
    @keyframes rotate-in {
      from { transform: rotate(-45deg) scale(0.85); opacity: 0; }
      to { transform: rotate(0) scale(1); opacity: 1; }
    }
  `]
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);
}
