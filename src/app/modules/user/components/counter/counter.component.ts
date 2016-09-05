import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: '/app/modules/user/components/counter/counter.component.html'
})
export class CounterComponent {
    constructor() {
        console.log('CounterComponent: constructor');
    }
}