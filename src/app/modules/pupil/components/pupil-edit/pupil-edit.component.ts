import { Component, Inject, OnInit, Host } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PupilFormComponent } from './../pupil-form/pupil-form.component';
import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';
import { PupilInterface } from './../../interfaces/models/pupil.interface';

@Component({
	selector: 'pupil-edit',
	templateUrl: '/app/modules/pupil/components/pupil-edit/pupil-edit.component.html'
})
export class PupilEditComponent implements OnInit {

	pupil: PupilInterface;

	private formDirty: boolean = false;

	constructor(
		@Host() @Inject('PupilApiInterface') private pupilApiService: PupilApiInterface,
		private route: ActivatedRoute,
		private router: Router) {
		console.log('PupilEditComponent: construct');
	}

	ngOnInit() {
		this.route.data.forEach((data: {pupil: PupilInterface}) => {
			this.pupil = data.pupil;
		});
	}

	isFormDirty(value: boolean): void {
        this.formDirty = value;
    }

	onUpdate(pupil: PupilInterface): void {
		this.pupilApiService.updatePupil(this.pupil.id, pupil)
			.subscribe(pupil => {
				this.formDirty = false;
				this.router.navigate(['/pupils']) 
			});
	}

	canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
        return this.formDirty ? window.confirm('Some data if the current user might been changed. Do you really want to go out?') : true;        
    }
}
