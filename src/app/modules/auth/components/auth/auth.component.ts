import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from './../../models/user.model';

@Component({
	selector: 'auth',
	templateUrl: '/app/modules/auth/components/auth/auth.component.html',
	styles: []
})
export class AuthComponent {

	userForm: FormGroup;

	constructor(
		@Inject(FormBuilder) private _formBuilder
		) {}

	ngOnInit() {
		this.userForm = this._formBuilder.group({
			'username': [''],
			'password': [''],
			'confirm_password': ['']
		});
	}
}
