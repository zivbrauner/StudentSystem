import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';
import { AuthService } from "./auth/auth.service";

export const appConfig: ApplicationConfig = {
        providers: [provideRouter(routes),
        AuthService
    ]
};