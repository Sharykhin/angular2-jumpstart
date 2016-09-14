import { Component, Inject } from '@angular/core';

import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';

@Component({
    selector: 'create-pupil',
    templateUrl: '/app/modules/pupil/components/create-pupil/create-pupil.component.html'
})
export class CreatePupilComponent {
    constructor(
        @Inject('PupilApiInterface') private pupilApiInterface: PupilApiInterface
    ) {
        console.log('CreatePupilComponent: constructor');
    }
}
