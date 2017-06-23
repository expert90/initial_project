import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { LoginModule } from './app/module/login/login';

platformBrowserDynamic().bootstrapModule(LoginModule);
