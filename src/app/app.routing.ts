import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component'

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
        loadChildren: '/app/modules/pupil/pupil.module#PupilModule'
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
