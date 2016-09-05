import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './../home/home.component';
import {AboutComponent} from './../about/about.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
