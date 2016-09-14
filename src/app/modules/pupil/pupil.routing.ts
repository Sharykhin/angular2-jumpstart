import  { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { PupilProfileComponent } from './components/pupil-profile/pupil-profile.component';
import { PupilListComponent } from './components/pupil-list/pupil-list.component';
import { PupilSectionComponent } from './components/pupil-section/pupil-section.component';
import { CreatePupilComponent } from './components/create-pupil/create-pupil.component';

const pupilRoutes: Routes = [
	{
		path: '',
		component: PupilSectionComponent,
		children: [
			{ path: '', component: PupilListComponent },
			{ path: ':id', component: PupilProfileComponent },
			{ path: 'new', component: CreatePupilComponent}
		]
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(pupilRoutes);
