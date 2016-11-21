import {Component, Inject, OnInit} from '@angular/core';
import {AppStateInterface} from './../../interfaces/app-state.interface';
import { Store } from '@ngrx/store';
import {PUPIL_ACTIONS, PupilActions} from './../../actions/pupil.actions';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {PupilCreateActionInterface} from './../../interfaces/action-pupil.interface';
import {Pupil} from './../../models/pupil';
import {PupilInterface} from './../../interfaces/pupil.interface';


declare var module: {
	id: string
};

@Component({
	selector:'pupil-form',
	template: `
	<form novalidate name="pupilForm" (ngSubmit)="onSubmit($event, pupilForm.value)" [formGroup]="pupilForm">  
	  <div class="form-group">
	    <label for="pupilName">Name</label>
	    <input type="text" class="form-control" name="name" id="pupilName" [formControl]="pupilForm.controls['name']" placeholder="Name" required>	    
	  </div>
	  <div class="form-group">
	    <label for="pupilClassName">Class Name</label>
	    <select class="form-control" id="pupilClassName" name="className" [formControl]="pupilForm.controls['className']"  required>
	      <option *ngFor="let class of classes" [value]="class">{{ class }}</option>
	    </select>	    
	  </div>
	  <div class="form-group">
	    <label for="pupilLevel">Level</label>
	    <input type="number" class="form-control" max="10" id="pupilLevel" name="level" [formControl]="pupilForm.controls.level" placeholder="0" />	    
	  </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
	</form>
	`,
	styles:['']
})
export class PupilFormComponent implements OnInit {
	public classes = [
		'PHP',
		'JAVA'
	];

	pupil: PupilInterface;

	constructor(
		@Inject(Store) private _store: Store<AppStateInterface>,
		@Inject(FormBuilder) private _formBuilder: FormBuilder
		) {
		this.pupil = new Pupil('', 'PHP', 0);
		console.log('PupilFormComponent');
	}

	ngOnInit() {
		this.pupilForm = this._formBuilder.group({
			'name': [this.pupil.name],
			'className': [this.pupil.className],
			'level': [this.pupil.level]
		});
	}

	onSubmit($event, pupilData: PupilInterface) {
		$event.preventDefault();
		console.info(pupilData);
		this._store.dispatch(PupilActions.createPupil(pupilData) as PupilCreateActionInterface);
	}
}