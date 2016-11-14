import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.component.html',
    styleUrls: ['app/components/home/home.component.css']
})
export class HomeComponent implements OnInit  {

    constructor(        
    ) {
        console.log('HomeComponent: constructor');
    }

    ngOnInit () {

    }
}
