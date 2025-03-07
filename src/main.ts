import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      provideHttpClient(),
      provideAnimations(),
      MessageService,
      BrowserAnimationsModule
    ]
  }).catch(err => console.error(err));
