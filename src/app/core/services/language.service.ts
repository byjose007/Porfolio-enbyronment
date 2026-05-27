import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Lang = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private isBrowser = typeof window !== 'undefined';
  private document = inject(DOCUMENT);
  private langSignal = signal<Lang>(this.getInitialLang());
  
  currentLang = this.langSignal.asReadonly();

  constructor() {
    effect(() => {
      const currentLang = this.langSignal();
      if (this.isBrowser) {
        localStorage.setItem('ba-lang', currentLang);
      }
      this.document.documentElement.setAttribute('lang', currentLang);
    });
  }

  setLanguage(lang: Lang) {
    this.langSignal.set(lang);
  }

  toggleLanguage() {
    this.setLanguage(this.langSignal() === 'es' ? 'en' : 'es');
  }

  private getInitialLang(): Lang {
    if (!this.isBrowser) return 'es'; // Default is Spanish by default as per requirements
    
    const saved = localStorage.getItem('ba-lang') as Lang;
    if (saved === 'es' || saved === 'en') return saved;
    
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'es' ? 'es' : 'en';
  }
}
