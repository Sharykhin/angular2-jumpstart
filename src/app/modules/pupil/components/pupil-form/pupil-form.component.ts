import { Component, Input, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PupilInterface } from './../../interfaces/models/pupil.interface';

@Component({
	selector: 'pupil-form',
	templateUrl: '/app/modules/pupil/components/pupil-form/pupil-form.component.html',
	styleUrls: ['app/modules/pupil/components/pupil-form/pupil-form.component.css']
})
export class PupilFormComponent implements OnInit, AfterViewInit {

	@Input('pupil') pupil: PupilInterface;
	@Output() onSubmitted = new EventEmitter<PupilInterface>();
	@Output() isDirty = new EventEmitter<boolean>();

	classes = ['Javascript', 'PHP', 'Ruby', 'Python'];
    
    pupilForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {	
		console.log('PupilFormComponent: constructor');
		this.isDirty.emit(false);
	}

	ngOnInit() {
		console.log(this.pupil);
		this.pupilForm = this.formBuilder.group({
			'name': [this.pupil.name, Validators.required],
			'className': [this.pupil.className],
			'level': [this.pupil.level]
		});		
	}

	ngAfterViewInit() {
		//We user ngAfterViewInit lifecycle to prevent initial valueChage trigger
    	let subscription = this.pupilForm.valueChanges.subscribe(values => {
			this.isDirty.emit(true);			
			subscription.unsubscribe();
		});
  	}

	onSubmit(value: PupilInterface): void {
		console.log(value);		
		console.log(this.pupil);
		this.onSubmitted.emit(value);
	}
}