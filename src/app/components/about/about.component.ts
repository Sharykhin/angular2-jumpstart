import {Component} from 'angular2/core';

@Component({
    selector: 'about',
    templateUrl: '/app/componentns/about/about.component.html',
    styleUrls: ['/app/components/about/about.component.css']
})
export class AboutComponent {
    constructor() {
        console.log('AboutComponent: constructor');
    }
}
