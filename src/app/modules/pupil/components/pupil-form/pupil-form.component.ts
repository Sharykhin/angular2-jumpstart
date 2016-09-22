import { Component, Input, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
			'name': [this.pupil.name, Validators.compose([
				Validators.required,
				this.pupilNameValidator
				])],
			'className': [this.pupil.className],
			'level': [this.pupil.level, this.pupulLevelMax]
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

	pupilNameValidator(control: FormControl): { [s: string]: boolean } {
		if (control.value && control.value.length < 3) {
			return { invalidPupilName: true };
		}
	}

	pupulLevelMax(control: FormControl): { [s: string]: boolean } {
		if (control.value && +control.value > 10 ) {
			return { invaliPupilLevel: true }
		}
	}
}