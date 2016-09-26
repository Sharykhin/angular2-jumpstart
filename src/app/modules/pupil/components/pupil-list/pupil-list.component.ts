import { Component, OnInit, Inject, Host } from '@angular/core';

import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';
import { PupilInterface } from './../../interfaces/models/pupil.interface';

@Component({
	selector: 'pupil-list',
	templateUrl: '/app/modules/pupil/components/pupil-list/pupil-list.component.html'
})
export class PupilListComponent implements OnInit {

	pupils: PupilInterface[];

	constructor(
		@Host() @Inject('PupilApiInterface') private pupilApiService: PupilApiInterface,
		@Inject('MyEventEmitter') private _ee
		) {
		console.log('PupilListComponent: constructor');
		this._ee.on('SEARCH', (pupils: PupilInterface[]) => {
            this.pupils = pupils;
		});
	}

	onDelete(pupil: PupilInterface) {
		console.log('pupil should be removed', pupil);
		if(confirm('Are you sure?')) {
			this.pupilApiService.removePupil(pupil.id)
			.subscribe( success => {
				if (success) {
					this.pupils.splice(this.pupils.indexOf(pupil), 1)		
				}				
			});
		}		
	}

	ngOnInit() {
		console.log('PupilListComponent: make api request for getting all the pupils');
        this.pupilApiService.getPupils().subscribe(pupils => {
            this.pupils = pupils;
        });
	}
}