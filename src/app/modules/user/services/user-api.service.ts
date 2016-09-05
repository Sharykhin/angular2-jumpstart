import { Injectable } from '@angular/core';

@Injectable()
export class UserApiService {

    public getUser(id) {
        console.log(`UserApiService: make api request to get user with ID: ${id}.`);
    }
}