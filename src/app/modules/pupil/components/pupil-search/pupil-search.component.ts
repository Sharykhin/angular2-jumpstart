import { Component, Inject, Host, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'

import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';
import { PupilInterface } from './../../interfaces/models/pupil.interface';

@Component({
	selector: 'pupil-search',
	templateUrl: 'app/modules/pupil/components/pupil-search/pupil-search.component.html',
	styleUrls: ['app/modules/pupil/components/pupil-search/pupil-search.component.css']
})
export class PupilSearchComponent {

	pupils: Array<PupilInterface>;
	term = new FormControl();	

	onSearch = new EventEmitter<any>();

	constructor(
		@Inject('PupilApiInterface') private pupilApiService: PupilApiInterface,
		@Inject('MyEventEmitter') private ee
		) {
		console.log(this.ee, this.onSearch, this.ee === this.onSearch);
		this.term.valueChanges
			.debounceTime(500)
			.switchMap(term => this.pupilApiService.search(term))
			.subscribe(pupils => console.log('FOUND', pupils));
	}	
}