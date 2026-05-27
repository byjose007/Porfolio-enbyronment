import { Component, inject, signal, HostListener, afterNextRender, OnDestroy } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../core/services/language.service';
import { ContentService } from '../../core/services/content.service';
import { ThemeToggleComponent } from './theme-toggle.component';
import { LanguageToggleComponent } from './language-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ThemeToggleComponent,
    LanguageToggleComponent
  ],
  template: `
    <nav [class.scrolled]="isScrolled()">
      <div class="wrap nav-inner">
        <a [routerLink]="['/']" fragment="top" class="brand" (click)="closeMenu()">
          <span class="code-logo">&lt;/&gt;</span>en<b>byron</b>ment<span style="color:var(--mute);font-weight:400">.dev</span>
        </a>
        
        <div class="nav-links">
          <a class="lnk" [routerLink]="['/']" fragment="work" [class.active]="activeSection() === 'work'">{{ t().nav.work }}</a>
          <a class="lnk" [routerLink]="['/']" fragment="stack" [class.active]="activeSection() === 'stack'">{{ t().nav.stack }}</a>
          <a class="lnk" [routerLink]="['/']" fragment="experience" [class.active]="activeSection() === 'experience'">{{ t().nav.experience }}</a>
          <a class="lnk" [routerLink]="['/']" fragment="about" [class.active]="activeSection() === 'about'">{{ t().nav.about }}</a>
          
          <app-language-toggle></app-language-toggle>
          <app-theme-toggle></app-theme-toggle>
          
          <a class="nav-cta" [routerLink]="['/']" fragment="contact" [class.active]="activeSection() === 'contact'">{{ t().nav.cta }}</a>
        </div>
        
        <div class="mobile-actions-wrapper">
          <button class="menu-btn" 
                  (click)="toggleMenu()" 
                  [attr.aria-expanded]="isMenuOpen()"
                  aria-label="Abrir menú de navegación">
            {{ isMenuOpen() ? '✕' : '≡' }}
          </button>
        </div>
      </div>
    </nav>

    <!-- MOBILE NAVIGATION OVERLAY DRAWER -->
    <div class="mobile-nav-panel" [class.open]="isMenuOpen()">
      <div class="mobile-links">
        <a [routerLink]="['/']" fragment="work" (click)="closeMenu()" [class.active]="activeSection() === 'work'">{{ t().nav.work }}</a>
        <a [routerLink]="['/']" fragment="stack" (click)="closeMenu()" [class.active]="activeSection() === 'stack'">{{ t().nav.stack }}</a>
        <a [routerLink]="['/']" fragment="experience" (click)="closeMenu()" [class.active]="activeSection() === 'experience'">{{ t().nav.experience }}</a>
        <a [routerLink]="['/']" fragment="about" (click)="closeMenu()" [class.active]="activeSection() === 'about'">{{ t().nav.about }}</a>
        <a [routerLink]="['/']" fragment="contact" (click)="closeMenu()" class="accent" [class.active]="activeSection() === 'contact'">{{ t().nav.cta }}</a>
      </div>
      
      <div class="mobile-footer">
        <div style="display: flex; gap: 16px; align-items: center; justify-content: center; margin-bottom: 20px;">
          <app-language-toggle></app-language-toggle>
          <app-theme-toggle></app-theme-toggle>
        </div>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-align: center; color: var(--mute);">
          © 2026 Byron Armijos · Alicante, ES
        </span>
      </div>
    </div>
  `,
  styles: [`
    .lnk.active {
      color: var(--text) !important;
    }
    .lnk.active::after {
      width: 100% !important;
    }
    .mobile-actions-wrapper {
      display: none;
    }
    .menu-btn {
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media(max-width: 880px) {
      .mobile-actions-wrapper {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  `]
})
export class HeaderComponent implements OnDestroy {
  readonly languageService = inject(LanguageService);
  private contentService = inject(ContentService);
  private router = inject(Router);
  
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  activeSection = signal<string>('');

  private observer: IntersectionObserver | null = null;
  private navSub?: Subscription;

  t = () => this.contentService.translations[this.languageService.currentLang()];

  constructor() {
    afterNextRender(() => {
      this.navSub = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.initScrollSpy();
      });

      this.initScrollSpy();
    });
  }

  initScrollSpy() {
    if (this.observer) {
      this.observer.disconnect();
    }

    const sections = ['work', 'stack', 'experience', 'about', 'contact'];
    const intersectingSections = new Set<string>();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          intersectingSections.add(entry.target.id);
        } else {
          intersectingSections.delete(entry.target.id);
        }
      });

      if (intersectingSections.size > 0) {
        const active = sections.find(id => intersectingSections.has(id));
        if (active) {
          this.activeSection.set(active);
        }
      } else if (typeof window !== 'undefined' && window.scrollY < 200) {
        this.activeSection.set('');
      }
    }, {
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0
    });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        this.observer?.observe(el);
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 30);
      
      const threshold = 50;
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - threshold);
      if (isAtBottom) {
        this.activeSection.set('contact');
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.navSub) {
      this.navSub.unsubscribe();
    }
  }
}
