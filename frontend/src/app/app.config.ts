import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(FormsModule,ReactiveFormsModule),provideRouter(routes), provideClientHydration(),provideHttpClient(withFetch())]
};