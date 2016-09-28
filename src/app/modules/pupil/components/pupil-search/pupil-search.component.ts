import { Component, Inject} from '@angular/core';
import { FormControl } from '@angular/forms'

import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';
import { PupilInterface } from './../../interfaces/models/pupil.interface';
import { PupilSearchListenerInterface } from './../../interfaces/listeners/pupil-search-listener.interface';
import { PupilSearchListener } from './../../listeners/pupil-search.listener';
import { PupilApiService } from './../../services/pupil-api.service';

@Component({
	selector: 'pupil-search',
	templateUrl: 'app/modules/pupil/components/pupil-search/pupil-search.component.html',
	styleUrls: ['app/modules/pupil/components/pupil-search/pupil-search.component.css']
})
export class PupilSearchComponent {

	pupils: Array<PupilInterface>;

	term = new FormControl();	

	constructor(
		@Inject(PupilApiService) private pupilApiService: PupilApiInterface,
		@Inject(PupilSearchListener) private _searchEventEmitter: PupilSearchListenerInterface
		) {

		this.term.valueChanges
			.debounceTime(500)
			.switchMap(term => this.pupilApiService.search(term))
			.subscribe(pupils => {
				this._searchEventEmitter.onSearch(pupils);
			});
	}	
}