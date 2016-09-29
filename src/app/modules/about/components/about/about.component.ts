import {Component, OnInit, Inject} from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: '/app/modules/about/components/about/about.component.html',
    styleUrls: ['app/modules/about/components/about/about.component.css']
})
export class AboutComponent implements OnInit {

    isVisible : boolean = true;

    highlightColor = 'lime';

    constructor(
        @Inject('MyEventEmitter') private myEventEmitter
    ) {
        console.log('AboutComponent: constructor');
    }

    ngOnInit() {
        console.log('AboutComponent: Method ngOnInit');
    }

    onSearch(value: string) {
        console.log(value);
        this.myEventEmitter.emit('HIGHTLIGHT', value);
    }
}
