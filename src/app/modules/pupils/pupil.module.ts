import { NgModule }  from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { PupilSectionComponent } from './components/pupil-section/pupil-section.component';
import { PupilListComponent } from './components/pupil-list/pupil-list.component';

import { routing } from './pupil.routing';

@NgModule({
    imports:      [ routing, CommonModule, FormsModule, ReactiveFormsModule ], 
    declarations: [ PupilSectionComponent, PupilListComponent ],
    providers:    [	],
    exports: [ ]
})
export class PupilModule { }