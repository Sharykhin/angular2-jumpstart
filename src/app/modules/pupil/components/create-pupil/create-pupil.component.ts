import { Component, Inject, Host } from '@angular/core';
import { Router } from '@angular/router';

import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';
import { PupilInterface } from './../../interfaces/models/pupil.interface';
import { PupilApiService } from './../../services/pupil-api.service';
import { PupilModel } from './../../models/pupil.model';
import { CanComponentDeactivate } from './../../guards/confirm-deactivate.guard';
import { Observable }    from 'rxjs/Observable';
import { PupilListener } from './../../listeners/pupil.listener';
import { PupilListenerInterface } from './../../interfaces/listeners/pupil-listener.interface';

@Component({
    selector: 'create-pupil',
    templateUrl: '/app/modules/pupil/components/create-pupil/create-pupil.component.html'
})
export class CreatePupilComponent implements CanComponentDeactivate {

	pupil: PupilInterface;

    private formDirty: boolean = false;

    constructor(
        @Host() @Inject(PupilApiService) private pupilApiInterface: PupilApiInterface,
        @Host() @Inject(PupilListener) private _ee: PupilListenerInterface,
        private router: Router
    ) {
        console.log('CreatePupilComponent: constructor');
        this.pupil = new PupilModel();        
    }

    onCreate(pupil: PupilInterface) {
    	console.log('Does model equal to income data: ', pupil === this.pupil);
    	this.pupilApiInterface.createPupil(pupil).subscribe(data => { 
            this.formDirty = false;
            this._ee.onPupilCreated(data);
            this.router.navigate(['/pupils']);            
        });
    }

    isFormDirty(value: boolean): void {
        this.formDirty = value;
    }

    canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {        
        return this.formDirty ? window.confirm('Do you really want to cancel your changes?') : true;        
    }
}
