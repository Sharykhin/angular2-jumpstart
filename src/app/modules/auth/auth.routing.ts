import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthComponent } from './components/auth/auth.component';

const authRoutes: Routes = [
	{
		path: '',
		component: AuthComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(authRoutes);