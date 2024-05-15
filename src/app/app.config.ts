import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Cannot create an instance of an abstract class.ts(2511)

 class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  public getTranslation(lang: string): Observable<any> {
    return this.http.get( `assets/i18n/${lang}.json`);
  }
}

 function HttpLoaderFactory(http: HttpClient): any {
  return new CustomTranslateLoader(http);
}

export const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

export const appConfig: ApplicationConfig = {
  providers: [

    provideHttpClient(),
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot(provideTranslation())
    ]),
    provideRouter(routes),

  ]
};
