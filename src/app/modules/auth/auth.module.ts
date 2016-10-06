import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './auth.routing';
import { AuthComponent } from './components/auth/auth.component';
import { ConfirmPasswordDirective } from './directives/confirm-password.directive';

@NgModule({
	imports: [ routing, CommonModule, ReactiveFormsModule ],
	declarations: [ AuthComponent, ConfirmPasswordDirective ],
	providers: [
		{ provide: 'ApiUserEndpoint', useValue: 'http://localhost:5000/users' }
	]
})
export class AuthModule {}