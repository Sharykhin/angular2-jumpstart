import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';
import { PupilInterface } from './../../interfaces/models/pupil.interface';
import { PupilModel } from './../../models/pupil.model';


@Component({
    selector: 'create-pupil',
    templateUrl: '/app/modules/pupil/components/create-pupil/create-pupil.component.html'
})
export class CreatePupilComponent {

	pupil: PupilInterface;

    constructor(
        @Inject('PupilApiInterface') private pupilApiInterface: PupilApiInterface,
        private router: Router
    ) {
        console.log('CreatePupilComponent: constructor');
        this.pupil = new PupilModel();        
    }

    onCreate(pupil: PupilInterface) {
    	console.log(pupil === this.pupil);
    	this.pupilApiInterface.createPupil(this.pupil).subscribe(data => this.router.navigate(['/pupils']));
    }
}
