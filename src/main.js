import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import './rxjs-operators';

import 'systemjs-hot-reloader/default-listener.js';

let platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
