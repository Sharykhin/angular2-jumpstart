import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './auth.routing';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
	imports: [ routing, CommonModule, ReactiveFormsModule ],
	declarations: [ AuthComponent ],
	providers: [
		{ provide: 'ApiUserEndpoint', useValue: 'http://localhost:5000/users' }
	]
})
export class AuthModule {}