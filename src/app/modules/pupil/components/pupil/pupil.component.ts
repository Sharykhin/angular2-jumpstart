import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { PupilInterface } from './../../interfaces/models/pupil.interface';

@Component({
    selector: 'pupil',
    templateUrl: '/app/modules/pupil/components/pupil/pupil.component.html',
    styleUrls: ['app/modules/pupil//components/pupil/pupil.component.css']
})
export class PupilComponent implements OnInit {

    @Input('pupil') pupil: PupilInterface;
    @Output() onDeleted = new EventEmitter<PupilInterface>();

    constructor() {
		console.log('PupilComponent: constructor.');
    }
    
    onDelete() {
        this.onDeleted.emit(this.pupil);
    }

    ngOnInit() {
    	console.log(this.pupil);
    }
}
