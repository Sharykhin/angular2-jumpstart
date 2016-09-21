import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpModule } from '@angular/http';

import { HomeComponent } from './components/home/home.component';
import { AppComponent }  from './components/app/app.component';
import { AuthService } from './services/auth.service';
import { CanActivateViaAuthGuard } from './guards/can-activate-via-auth.guard';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing, HttpModule ],
    declarations: [ AppComponent, HomeComponent ],
    bootstrap:    [ AppComponent ],
    providers: [
        appRoutingProviders,       
        { provide: 'ApiEndpoint', useValue: 'http://localhost:5000' },
        { provide: 'CanAlwaysActivateGuard', useValue: () => { return false; }},
        AuthService,
        CanActivateViaAuthGuard
    ]
})
export class AppModule { }
