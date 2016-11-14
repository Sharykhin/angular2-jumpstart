import {Component, OnInit} from '@angular/core';

declare var module: {
   id: string;
}

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit  {

    constructor(        
    ) {
        console.log('HomeComponent: constructor');
    }

    ngOnInit () {

    }
}
