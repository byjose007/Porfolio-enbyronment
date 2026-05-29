import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isBrowser = typeof window !== 'undefined';
  private themeSignal = signal<Theme>(this.getInitialTheme());

  theme = this.themeSignal.asReadonly();

  constructor() {
    effect(() => {
      const currentTheme = this.themeSignal();
      
      if (this.isBrowser) {
        localStorage.setItem('ba-theme', currentTheme);
        const root = document.documentElement;
        if (currentTheme === 'light') {
          root.setAttribute('data-theme', 'light');
        } else {
          root.removeAttribute('data-theme');
        }
      }
    });
  }

  toggleTheme() {
    this.themeSignal.update(t => t === 'dark' ? 'light' : 'dark');
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) return 'dark';
    
    const saved = localStorage.getItem('ba-theme') as Theme;
    if (saved === 'light' || saved === 'dark') return saved;
    
    return 'dark';
  }
}
