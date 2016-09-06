import { Injectable } from '@angular/core';

import { UserApiInterface } from './../interfaces/user-api.interface';

@Injectable()
export class UserApiService implements UserApiInterface {

    public getUser(id) {
        console.log(`UserApiService: make api request to get user with ID: ${id}.`);
    }
}
