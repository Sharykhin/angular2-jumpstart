import {Component, OnInit, Inject} from '@angular/core';
import { Store } from '@ngrx/store';
import {AppStateInterface} from './../../reducers/index';

declare var module: {
   id: string;
}

@Component({
	selector:' counter',
	moduleId: module.id,
	templateUrl:'counter.component.html'
})
export class CounterComponent implements OnInit {
	public pupilCounter: number = 12;

	constructor(@Inject(Store) private _store: Store<AppStateInterface>) {}

	ngOnInit() {		
		this._store.subscribe((state: AppStateInterface) => {
			this.pupilCounter = state.pupils.length;
		});
	}
}
