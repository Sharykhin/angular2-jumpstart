import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './components/home/home.component';
import { AppComponent }  from './components/app/app.component';

import { routing, appRoutingProviders } from './components/app/app.routing';


@NgModule({
    imports:      [ BrowserModule, routing],
    declarations: [ AppComponent, HomeComponent ],
    bootstrap:    [ AppComponent ],
    providers: [
        appRoutingProviders
    ],
})
export class AppModule { }
