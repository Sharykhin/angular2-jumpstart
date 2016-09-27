
declare var EventEmitter: any;

const SEARCH = 'onSearch';

export class PupilSearchListener extends EventEmitter {

	get SEARCH() {		
		return SEARCH;
	}

	onSearch(pupils) {
		this.emitEvent(SEARCH, [pupils]);
	}
}
