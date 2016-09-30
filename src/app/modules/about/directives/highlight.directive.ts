import { Directive, ElementRef, Input, Renderer, HostListener, Inject, OnChanges, OnDestroy } from '@angular/core';

@Directive({ 
	selector: '[myHighlight]'
})
export class HighlightDirective {

	private _defaultColor = 'yellow';

	@Input('highlightColor') hitghlighColor: string;

	private _text: string;

	constructor(
		private el: ElementRef, 
		private renderer: Renderer,
		@Inject('MyEventEmitter') private myEventEmitter) {		

		this.myEventEmitter.addListener('HIGHTLIGHT', this.highlightText.bind(this));
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.renderer.setElementAttribute(this.el.nativeElement, 'title', this._text);
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.renderer.setElementAttribute(this.el.nativeElement, 'title', null);
	}

	ngOnChanges() {
		// track changes of color
	}

	ngOnDestroy() {
		this.myEventEmitter.removeListener('HIGHTLIGHT', this.highlightText.bind(this));
	}

	private highlight(color: string) {
		this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
	}

	private highlightText(text: string) {
		this._text = this._text || this.el.nativeElement.innerHTML;
		this.el.nativeElement.innerHTML = this._text;
		if (text) {
			let color = this.hitghlighColor || this._defaultColor;
			this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace(new RegExp(text, 'g'), `<span style="background-color:${color};">${text}</span>`);
		}
	}
}