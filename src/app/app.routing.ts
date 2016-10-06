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
        loadChildren: '/app/modules/about/about.module#AboutModule'
    },
    {
        path: 'pupils',
        loadChildren: '/app/modules/pupil/pupil.module#PupilModule'
    },
    {
        path: 'sign-in',
        loadChildren: '/app/modules/auth/auth.module#AuthModule'
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
