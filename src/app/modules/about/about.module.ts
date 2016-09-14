import { NgModule }  from '@angular/core';

import { routing } from './about.routing';
import { AboutComponent }  from './components/about/about.component';

@NgModule({
    imports:      [ routing ],
    declarations: [ AboutComponent],
    bootstrap:    [],
    providers: [],
})
export default class AboutModule {}
