import {Directive, ElementRef, Input, OnInit} from 'angular2/core';

@Directive({
	selector: '[myHighLight]',

})
export class HighlightDirective implements OnInit {

	@Input('myHighLight') highlightColor: string;

	private _defaultColor: string = 'red';

	constructor(private el: ElementRef) {}

	ngOnInit() {
		console.log(this.highlightColor);
		this.el.nativeElement.style.color = this.highlightColor || this._defaultColor;
	}
}
