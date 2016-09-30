import { Component, Input, OnChanges, trigger, state, animate, transition, style  } from '@angular/core';

@Component({
	selector: 'my-ads',
	templateUrl: '/app/modules/about/components/ads/ads.component.html',
	animations: [
		trigger('visibilityChanged', [
			state('shown' , style({ opacity: 1 })),
			state('hidden', style({ opacity: 0 })),
			transition('* => *', animate('.5s'))
		])
	]
})
export class AdsComponent implements OnChanges {

	visibility = 'shown';

  	@Input() isVisible : boolean = true;

  	ngOnChanges() {  		
    	this.visibility = this.isVisible ? 'shown' : 'hidden';
  	}
}
