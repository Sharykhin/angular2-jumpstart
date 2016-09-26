import { NgModule }  from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { PupilComponent } from './components/pupil/pupil.component';
import { PupilListComponent } from './components/pupil-list/pupil-list.component';
import { PupilProfileComponent } from './components/pupil-profile/pupil-profile.component';
import { PupilSectionComponent } from './components/pupil-section/pupil-section.component';
import { CreatePupilComponent } from './components/create-pupil/create-pupil.component';
import { PupilFormComponent } from './components/pupil-form/pupil-form.component';
import { ConfirmDeactivateGuard } from './guards/confirm-deactivate.guard';
import { PupilEditComponent } from './components/pupil-edit/pupil-edit.component';
import { PupilResolveService } from './services/pupil-resolve.service';
import { PupilSearchComponent } from './components/pupil-search/pupil-search.component';

import { PupilApiService } from './services/pupil-api.service';
import { routing } from './pupil.routing';

@NgModule({
    imports:      [ routing, CommonModule, FormsModule, ReactiveFormsModule ], 
    declarations: [ PupilComponent, PupilSectionComponent, PupilListComponent, PupilProfileComponent, CreatePupilComponent, PupilFormComponent, PupilEditComponent, PupilSearchComponent ],
    providers:    [
    	{ provide: 'ApiEndpoint', useValue: 'http://localhost:5000' },
        { provide: 'PupilApiInterface', useClass: PupilApiService },
        ConfirmDeactivateGuard,
        PupilResolveService
    ],
    exports: [ ]
})
export class PupilModule { }
