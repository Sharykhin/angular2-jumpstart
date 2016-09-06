import {Component, OnInit} from '@angular/core';
import { Inject } from '@angular/core';

import { UserApiService } from './../../modules/user/services/user-api.service';
import { UserApiInterface } from './../../modules/user/interfaces/user-api.interface';

@Component({
    selector:'about',
    templateUrl: '/app/components/about/about.component.html',
    styleUrls: ['app/components/about/about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(
        @Inject(UserApiService) private userApiService: UserApiInterface
    ) {
        console.log('AboutComponent: constructor');
    }

    ngOnInit() {
        console.log('AboutComponent: Method ngOnInit');
        this.userApiService.getUser(12);
    }
}
