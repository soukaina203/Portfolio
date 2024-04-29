
import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(private translate: TranslateService) {}

  useLanguage(lang: string) {
    this.translate.use(lang);
  }

  // Add other translation-related methods if needed
}
