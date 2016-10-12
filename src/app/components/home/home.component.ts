import {Component, OnInit} from '@angular/core';

import { Chart } from './../../models/chart.model';
import { ChartInterface } from './../../interfaces/models/chart.interface';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.component.html',
    styleUrls: ['app/components/home/home.component.css']
})
export class HomeComponent implements OnInit  {

	charts: Array<ChartInterface>

    constructor(        
    ) {
        console.log('HomeComponent: constructor');
    }

    ngOnInit () {
    	this.charts = [
    		new Chart({
    			id: 'chart-1',    			
    			data: {
    				title: {
						text: 'Income'
    				},
    				type: 'bar',
    				series: [{
    					values: [2, 3, 4, 5, 1, 8]
    				}]
    			},
    			height: 300
    		}),
    		new Chart({
    			id: 'chart-2',

    			data: {
    				type: 'line',
    				title: {
    					text: 'Pupul Attendance'
    				},
    				series: [
    				{
    					text: 'Pupil Marks',
    					values: [35, 42, 67, 74]
    				},
    				{
    					text: 'Attendance',
    					values: [22, 42, 87, 45]
    				}
    				]
    			},
    			height: 300
    		})
    	];
    }
}
