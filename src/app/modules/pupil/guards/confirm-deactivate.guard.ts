import { CanDeactivate } from '@angular/router';
import { PupilFormComponent } from './../components/pupil-form/pupil-form.component';

export class ConfirmDeactivateGuard implements CanDeactivate<PupilFormComponent> {

	canDeactivate(component: PupilFormComponent) {
		console.log(component, arguments);
		//component.canDeactivate();
		/*if (component.hasChanges()) {
			return window.confirm('Do you realy want to cancel?');
		}*/
		return false;
	}
}
