import { NgModule }  from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { PupilComponent } from './components/pupil/pupil.component';
import { PupilListComponent } from './components/pupil-list/pupil-list.component';
import { PupilProfileComponent } from './components/pupil-profile/pupil-profile.component';
import { PupilSectionComponent } from './components/pupil-section/pupil-section.component';
import { CreatePupilComponent } from './components/create-pupil/create-pupil.component';
import { PupilFormComponent } from './components/pupil-form/pupil-form.component';

import { PupilApiService } from './services/pupil-api.service';
import { routing } from './pupil.routing';

@NgModule({
    imports:      [ routing, CommonModule, FormsModule ], 
    declarations: [ PupilComponent, PupilSectionComponent, PupilListComponent, PupilProfileComponent, CreatePupilComponent, PupilFormComponent ],
    providers:    [
        { provide: 'PupilApiInterface', useClass: PupilApiService }
    ],
    exports: []
})
export class PupilModule { }
