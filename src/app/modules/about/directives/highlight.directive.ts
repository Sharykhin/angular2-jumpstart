import { Directive, ElementRef, Input, Renderer, HostListener, Inject } from '@angular/core';

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
		
		this._text = this.el.nativeElement.innerHTML;

		this.myEventEmitter.addListener('HIGHTLIGHT',  text => {
			console.log(text);
		})
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight(this.hitghlighColor || this._defaultColor);
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	private highlight(color: string) {
		this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
	}
}