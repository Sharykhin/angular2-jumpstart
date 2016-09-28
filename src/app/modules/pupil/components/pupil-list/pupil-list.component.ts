import { Component, OnInit, Inject, Host } from '@angular/core';

import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';
import { PupilApiService } from './../../services/pupil-api.service';
import { PupilInterface } from './../../interfaces/models/pupil.interface';
import { PupilListener } from './../../listeners/pupil.listener';
import { PupilListenerInterface } from './../../interfaces/listeners/pupil-listener.interface';

@Component({
	selector: 'pupil-list',
	templateUrl: '/app/modules/pupil/components/pupil-list/pupil-list.component.html'
})
export class PupilListComponent implements OnInit {

	pupils: PupilInterface[];

	constructor(
		@Host() @Inject(PupilListener) private _ee2: PupilListenerInterface,		
		@Host() @Inject(PupilApiService) private pupilApiService: PupilApiInterface,
		@Inject('MyEventEmitter') private _ee		
		) {
		console.log('PupilListComponent: constructor');
		console.log(this._ee2);	
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
					this.pupils.splice(this.pupils.indexOf(pupil), 1);
					this._ee2.onPupilDeleted(pupil);		
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