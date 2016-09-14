import { Component } from '@angular/core';

@Component({
	selector: 'pupil-profile',
	templateUrl: '/app/modules/pupil/components/pupil-profile/pupil-profile.component.html'
})
export class PupilProfileComponent {
	constructor() {
		console.log('PupilProfileComponent: constructor');
	}
}
