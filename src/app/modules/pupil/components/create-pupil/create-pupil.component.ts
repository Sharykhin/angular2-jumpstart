import { Component, Inject } from '@angular/core';

import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';
import { PupilInterface } from './../../interfaces/models/pupil.interface';


@Component({
    selector: 'create-pupil',
    templateUrl: '/app/modules/pupil/components/create-pupil/create-pupil.component.html'
})
export class CreatePupilComponent {

	pupil: PupilInterface;

    constructor(
        @Inject('PupilApiInterface') private pupilApiInterface: PupilApiInterface
    ) {
        console.log('CreatePupilComponent: constructor');
    }
}
