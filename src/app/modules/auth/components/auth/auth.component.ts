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

	isRegister: boolean = false;

	constructor(
		@Inject(FormBuilder) private _formBuilder
		) {}

	ngOnInit() {
		this.userForm = this._formBuilder.group({
			'username': ['', Validators.required],
			'password': ['', Validators.required]			
		});
	}

	onRegisterState() {
		this.isRegister = !this.isRegister;
		if (this.isRegister) {
			this.userForm.addControl('confirm_password', new FormControl('', Validators.required));
		} else {
			if (this.userForm.controls.hasOwnProperty('confirm_password')) {
				delete this.userForm.controls['confirm_password'];	
			}			
		}
	}

	onSubmit(value: { [s: string]: string }) {		
		console.log()
		let user = new UserModel(value['username'], value['password']);
		console.log(user);
		return false;
	}
}
