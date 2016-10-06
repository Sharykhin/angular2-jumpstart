import { Directive, ElementRef, Input, Renderer, Inject, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Directive({
	selector: '[confirm-password]'
})
export class ConfirmPasswordDirective {

	@Input('confirmWith') confirmWith: FormControl

	constructor(
		@Inject(ElementRef) private _el,
		@Inject(Renderer) private _renderer
		) {}

	ngOnInit() {
		console.log(this.confirmWith);
	}
}