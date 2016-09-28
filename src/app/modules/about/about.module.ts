import { NgModule }  from '@angular/core';
import { CommonModule }   from '@angular/common';

import { routing } from './about.routing';
import { AboutComponent }  from './components/about/about.component';
import { AdsComponent } from './components/ads/ads.component';
import { CanAlwaysActivateGuard } from './guards/can-always-activate.guard';

@NgModule({
    imports:      [ routing, CommonModule ],
    declarations: [ AboutComponent, AdsComponent ],
    bootstrap:    [],
    providers: [ CanAlwaysActivateGuard ],
})
export class AboutModule {}
