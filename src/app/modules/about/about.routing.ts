import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './components/about/about.component';

const aboutRoutes: Routes = [
    {
        path: '',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
