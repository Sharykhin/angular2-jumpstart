import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './components/home/home.component';
import { AppComponent }  from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AppRequestOptions } from './config/app-request-options';
import { RequestOptions } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing, HttpModule ],
    declarations: [ AppComponent, HomeComponent, NotFoundComponent ],
    bootstrap:    [ AppComponent ],
    providers: [
        appRoutingProviders,       
        { provide: 'ApiEndpoint', useValue: 'http://localhost:5000' },
        { provide: 'ApiPupilsEndpoint', useValue: 'http://localhost:5000/pupils'},
        { provide: RequestOptions, useClass: AppRequestOptions }
    ]
})
export class AppModule { }
