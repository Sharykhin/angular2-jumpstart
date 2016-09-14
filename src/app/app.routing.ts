import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component';

import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        pathMatch: 'full',
        loadChildren: '/app/modules/about/about.module'
    },
    {
        path: 'pupils',
        pathMatch: 'full',
        loadChildren: '/app/modules/pupil/pupil.module#PupilModule'
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
