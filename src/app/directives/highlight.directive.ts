import {Directive, ElementRef, Input, OnInit} from 'angular2/core';

@Directive({
	selector: '[myHighLight]',
	host: {
		'(mouseenter)': 'onMouseEnter()',
		'(mouseleave)': 'onMouseLeave()'
	}

})
export class HighlightDirective implements OnInit {

	@Input('myHighLight') highlightColor: string;

	private _defaultColor: string = 'red';

	constructor(private el: ElementRef) {}

	onMouseEnter() {
		this._highlight(this.highlightColor || this._defaultColor);
	}

	onMouseLeave() {
		this._highlight(null);
	}

	private _highlight(color: string) {
		this.el.nativeElement.style.color = color;
	}
}
