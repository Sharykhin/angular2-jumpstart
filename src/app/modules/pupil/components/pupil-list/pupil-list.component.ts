import { Component, OnInit, OnDestroy, Inject, Host } from '@angular/core';

import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';
import { PupilApiService } from './../../services/pupil-api.service';
import { PupilInterface } from './../../interfaces/models/pupil.interface';
import { PupilListener } from './../../listeners/pupil.listener';
import { PupilListenerInterface } from './../../interfaces/listeners/pupil-listener.interface';
import { PupilSearchListenerInterface } from './../../interfaces/listeners/pupil-search-listener.interface';
import { PupilSearchListener } from './../../listeners/pupil-search.listener';

@Component({
	selector: 'pupil-list',
	templateUrl: '/app/modules/pupil/components/pupil-list/pupil-list.component.html'
})
export class PupilListComponent implements OnInit, OnDestroy {

	pupils: Array<PupilInterface>;

	constructor(
		@Host() @Inject(PupilListener) private _pupilEventEmitter: PupilListenerInterface,		
		@Host() @Inject(PupilApiService) private pupilApiService: PupilApiInterface,
		@Host() @Inject(PupilSearchListener) private _searchEventEmitter: PupilSearchListenerInterface 		
		) {
		console.log('PupilListComponent: constructor');
	}

	onDelete(pupil: PupilInterface) {
		console.log('pupil should be removed', pupil);
		if(confirm('Are you sure?')) {
			this.pupilApiService.removePupil(pupil.id)
			.subscribe( success => {
				if (success) {
					this.pupils.splice(this.pupils.indexOf(pupil), 1);
					this._pupilEventEmitter.onPupilDeleted(pupil);		
				}				
			});
		}		
	}

	ngOnInit() {
		console.log('PupilListComponent: make api request for getting all the pupils');
        this.pupilApiService.getPupils().subscribe(pupils => {
            this.pupils = pupils;
        });

        this._searchEventEmitter.addListener(this._searchEventEmitter.SEARCH, this.updateUserList.bind(this));
	}

	ngOnDestroy() {
		this._searchEventEmitter.removeListener(this._searchEventEmitter.SEARCH, this.updateUserList.bind(this));
	}

	private updateUserList(pupils: Array<PupilInterface>) {
		console.log('Got pupisl, update the list', pupils);
		this.pupils = pupils;
	}
}