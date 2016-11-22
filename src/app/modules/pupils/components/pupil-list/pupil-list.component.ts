import { Component, OnInit, OnDestroy, Inject, Host } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from './../../../../reducers/index';

@Component({
	selector: 'pupil-list',
	template: `
		<h2>Pupil List</h2>
		<h4>current number is {{ pupils }}</h4>
	`
})
export class PupilListComponent implements OnInit, OnDestroy {

	pupils: number = 0;

	constructor(@Inject(Store) private _store: Store<AppStateInterface>) {	
		console.log('PupilListComponent: constructor');
	}
	
	ngOnInit() {
		this._store.subscribe((state: AppStateInterface) => {
			this.pupils = state.pupils.length;
		});
	}

	ngOnDestroy() {		
	}	
}