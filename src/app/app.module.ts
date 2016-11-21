import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { AppComponent }  from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CounterComponent } from './components/counter/counter.component';
import { PupilFormComponent } from './components/pupil-form/pupil-form.component';

import { AppRequestOptions } from './config/app-request-options';
import { RequestOptions } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { reducer } from './reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

@NgModule({
    imports:      [ 
    	BrowserModule, 
    	routing, 
    	HttpModule, 
    	StoreModule.provideStore(reducer), 
    	StoreDevtoolsModule.instrumentOnlyWithExtension(),
    	StoreDevtoolsModule.instrumentStore({
	      monitor: useLogMonitor({
	        visible: true,
	        position: 'right'
	      })
        }),
        StoreLogMonitorModule,
        FormsModule, 
        ReactiveFormsModule
	],
    declarations: [ AppComponent, HomeComponent, NotFoundComponent, CounterComponent, PupilFormComponent ],
    bootstrap:    [ AppComponent ],
    providers: [
        appRoutingProviders,       
        { provide: 'ApiEndpoint', useValue: 'http://localhost:5000' },
        { provide: 'ApiPupilsEndpoint', useValue: 'http://localhost:5000/pupils'},
        { provide: RequestOptions, useClass: AppRequestOptions }
    ]
})
export class AppModule { }
