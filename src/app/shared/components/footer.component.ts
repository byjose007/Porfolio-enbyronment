import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="wrap foot-inner">
        <span>{{ t().footer.text }}<span class="accent">enbyronment.dev</span></span>
        <span>Alicante · España</span>
        <span><span class="accent">v1.0</span></span>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly languageService = inject(LanguageService);
  private contentService = inject(ContentService);

  t = () => this.contentService.translations[this.languageService.currentLang()];
}
