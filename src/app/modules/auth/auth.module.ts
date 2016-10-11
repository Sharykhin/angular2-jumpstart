import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './auth.routing';
import { AuthComponent } from './components/auth/auth.component';
import { EqualValidator } from './directives/equal.validator';

@NgModule({
	imports: [ routing, CommonModule, ReactiveFormsModule ],
	declarations: [ AuthComponent, EqualValidator ],
	providers: [
		{ provide: 'ApiUserEndpoint', useValue: 'http://localhost:5000/users' }
	]
})
export class AuthModule {}