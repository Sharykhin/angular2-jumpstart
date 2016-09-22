import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { PupilInterface } from './../../interfaces/models/pupil.interface';

@Component({
	selector: 'pupil-form',
	templateUrl: '/app/modules/pupil/components/pupil-form/pupil-form.component.html',
	styleUrls: ['app/modules/pupil/components/pupil-form/pupil-form.component.css']
})
export class PupilFormComponent implements OnInit {

	@Input('pupil') pupil: PupilInterface;
	@Output() onSubmitted = new EventEmitter<PupilInterface>();

	classes = ['Javascript', 'PHP', 'Ruby', 'Python'];
    public foo = 'loh';

	constructor() {		
		console.log('PupilFormComponent: constructor');
	}

	ngOnInit() {
		console.log(this.pupil);
	}

	onSubmit() {		
		this.onSubmitted.emit(this.pupil);
	}

	newPupil() {
		console.log('new pupil was pressed');
	}

	canDeactivate() {
       console.log('ha');
       return false;
    }
}