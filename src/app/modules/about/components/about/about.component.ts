import {Component, OnInit, Inject, Renderer, ViewChild, AfterViewInit, ElementRef} from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: '/app/modules/about/components/about/about.component.html',
    styleUrls: ['app/modules/about/components/about/about.component.css']
})
export class AboutComponent implements OnInit {

    isVisible : boolean = true;

    highlightColor = 'lime';

    textSearch: string;

    @ViewChild('inputSearch') input: ElementRef;

    constructor(
        @Inject('MyEventEmitter') private myEventEmitter,
        private _renderer: Renderer
    ) {
        console.log('AboutComponent: constructor');
    }

    ngOnInit() {
        console.log('AboutComponent: Method ngOnInit');
    }

    onSearch() {      
        this.myEventEmitter.emit('HIGHTLIGHT', this.textSearch);
    }

    setColor(color: string) {
        this.highlightColor = color;
        setTimeout(() => {
            this.myEventEmitter.emit('HIGHTLIGHT', this.textSearch);    
        }, 0);        
    }

    ngAfterViewInit() {
         this._renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    }
}
