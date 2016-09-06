import { NgModule }  from '@angular/core';

import { UserApiService } from './services/user-api.service';

import { FooterFaceComponent } from './components/footer-face/footer-face.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    imports:      [],
    declarations: [
        CounterComponent, FooterFaceComponent
    ],
    providers:    [
        UserApiService
    ],
    exports: [FooterFaceComponent]
})
export class UserModule { }