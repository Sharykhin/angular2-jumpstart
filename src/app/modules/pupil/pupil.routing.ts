import  { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { PupilProfileComponent } from './components/pupil-profile/pupil-profile.component';
import { PupilListComponent } from './components/pupil-list/pupil-list.component';
import { PupilSectionComponent } from './components/pupil-section/pupil-section.component';
import { CreatePupilComponent } from './components/create-pupil/create-pupil.component';
import { CanActivateViaAuthGuard } from './../../guards/can-activate-via-auth.guard';
import { ConfirmDeactivateGuard }    from './guards/confirm-deactivate.guard';

const pupilRoutes: Routes = [
	{
		path: '',
		component: PupilSectionComponent,
		children: [
			{ path: '', component: PupilListComponent },
			{ path: 'new', component: CreatePupilComponent, canActivate: [ CanActivateViaAuthGuard ], canDeactivate: [ ConfirmDeactivateGuard ]},
			{ path: ':id', component: PupilProfileComponent }
		]
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(pupilRoutes);
