import {Component, OnInit} from '@angular/core';

import { UserApiService } from './../../modules/user/services/user-api.service';

@Component({
    selector: 'about',
    templateUrl: '/app/components/about/about.component.html',
    styleUrls: ['app/components/about/about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(
        private userApiService: UserApiService
    ) {
        console.log('AboutComponent: constructor');
    }

    ngOnInit() {
        console.log('AboutComponent: Method ngOnInit');
        this.userApiService.getUser(12);
    }
}
