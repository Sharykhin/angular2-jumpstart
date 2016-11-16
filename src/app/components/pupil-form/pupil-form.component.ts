import {Component} from '@angular/core';

declare var module: {
	id: string
};

@Component({
	selector:'pupil-form',
	template: `
	<form novalidate name="pupilForm" (ngSubmit)="onSubmit()">  
	  <div class="form-group">
	    <label for="pupilName">Name</label>
	    <input type="text" class="form-control" name="name" id="pupilName" placeholder="Name" required>	    
	  </div>
	  <div class="form-group">
	    <label for="pupilClassName">Class Name</label>
	    <select class="form-control" id="pupilClassName" name="className" required>
	      <option *ngFor="let class of classes" [value]="class">{{ class }}</option>
	    </select>	    
	  </div>
	  <div class="form-group">
	    <label for="pupilLevel">Level</label>
	    <input type="number" class="form-control" max="10" id="pupilLevel" name="level" placeholder="0" />	    
	  </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
	</form>
	`,
	styles:['']
})
export class PupilFormComponent {
	public classes = [
		'PHP',
		'JAVA'
	];

	constructor() {
		console.log('PupilFormComponent');
	}

	onSubmit() {

	}
}