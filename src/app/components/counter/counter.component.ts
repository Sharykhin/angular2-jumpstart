import {Component} from '@angular/core';

declare var module: {
   id: string;
}

@Component({
	selector:' counter',
	moduleId: module.id,
	templateUrl:'counter.component.html'
})
export class CounterComponent {
	public pupilCounter: number = 12;
}