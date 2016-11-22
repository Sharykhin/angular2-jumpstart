import  { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { PupilListComponent } from './components/pupil-list/pupil-list.component';
import { PupilSectionComponent } from './components/pupil-section/pupil-section.component';

const pupilRoutes: Routes = [
	{
		path: '',
		component: PupilSectionComponent,
		children: [
			{ path: '', component: PupilListComponent },			
		]
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(pupilRoutes);
