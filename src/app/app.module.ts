import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './modules/user/user.module';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './components/home/home.component';
import { AppComponent }  from './components/app/app.component';

import { routing, appRoutingProviders } from './app.routing';

import { PupilApiService } from './services/pupil-api.service';


@NgModule({
    imports:      [ BrowserModule, routing, UserModule, HttpModule ],
    declarations: [ AppComponent, HomeComponent],
    bootstrap:    [ AppComponent ],
    providers: [
        appRoutingProviders,
        PupilApiService,
        { provide: 'ApiEndpoint', useValue: 'http://localhost:5000' }
    ]
})
export class AppModule { }
