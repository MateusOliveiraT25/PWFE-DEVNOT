import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Inicializa o módulo Angular
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




