import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PupilFormComponent } from './../components/pupil-form/pupil-form.component';
import { Observable }    from 'rxjs/Observable';

export interface CanComponentDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

	canDeactivate(component: CanComponentDeactivate) {
		return component.canDeactivate ? component.canDeactivate() : true;
	}
}
