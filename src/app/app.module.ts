import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpModule } from '@angular/http';

import { HomeComponent } from './components/home/home.component';
import { AppComponent }  from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotificationComponent } from './components/notification/notification.component';

import { AuthService } from './services/auth.service';
import { CanActivateViaAuthGuard } from './guards/can-activate-via-auth.guard';

import { routing, appRoutingProviders } from './app.routing';

declare var EventEmitter: any;

@NgModule({
    imports:      [ BrowserModule, routing, HttpModule ],
    declarations: [ AppComponent, HomeComponent, NotFoundComponent, NotificationComponent ],
    bootstrap:    [ AppComponent ],
    providers: [
        appRoutingProviders,       
        { provide: 'ApiEndpoint', useValue: 'http://localhost:5000' },
        { provide: 'ApiPupilsEndpoint', useValue: 'http://localhost:5000/pupils'},
        { provide: 'CanAlwaysActivateGuard', useValue: () => { return false; }},
        AuthService,
        CanActivateViaAuthGuard,
        { provide: 'MyEventEmitter', useClass: EventEmitter }
    ]
})
export class AppModule { }
