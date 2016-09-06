import { NgModule }  from '@angular/core';

import { UserApiService } from './services/user-api.service';

import { FooterFaceComponent } from './components/footer-face/footer-face.component';

@NgModule({
    imports:      [],
    declarations: [
        FooterFaceComponent
    ],
    providers:    [
        UserApiService
    ],
    exports: [FooterFaceComponent]
})
export class UserModule { }
