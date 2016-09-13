import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PupilModule } from './modules/pupil/pupil.module';

import { HttpModule } from '@angular/http';

import { HomeComponent } from './components/home/home.component';
import { AppComponent }  from './components/app/app.component';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing, HttpModule, PupilModule ],
    declarations: [ AppComponent, HomeComponent ],
    bootstrap:    [ AppComponent ],
    providers: [
        appRoutingProviders,       
        { provide: 'ApiEndpoint', useValue: 'http://localhost:5000' }
    ]
})
export class AppModule { }
