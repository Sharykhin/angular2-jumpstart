import {Component, OnInit} from '@angular/core';

import { PupilApiService } from './../../services/pupil-api.service';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.component.html',
    styleUrls: ['app/components/home/home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private pupilApiService: PupilApiService
    ) {
        console.log('HomeComponent: constructor');
    }

    ngOnInit() {
        console.log('HomeComponent: make api request for getting all the pupils');
        this.pupilApiService.getPupils().subscribe(pupils => {
            console.log(pupils);
        });
    }
}
