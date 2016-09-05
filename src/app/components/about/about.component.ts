import {Component, OnInit} from '@angular/core';

@Component({
    selector:'about',
    templateUrl: '/app/components/about/about.component.html',
    styleUrls: ['/app/components/about/about.component.css']
})
export class AboutComponent implements OnInit {

    constructor() {
        console.log('AboutComponent: constructor');
    }

    ngOnInit() {
        console.log('AboutComponent: Method ngOnInit');
    }
}
