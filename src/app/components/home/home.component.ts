import {Component, OnInit} from '@angular/core';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './../../reducers/counter.reducer';
import {AppStateInterface} from './../../reducers/index';

declare var module: {
   id: string;
}

interface AppState {
  counter: number;
}

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit  {

    constructor( private store: Store<AppStateInterface>       
    ) {
        console.log('HomeComponent: constructor');
    }

    increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }

    ngOnInit () {

    }
}
