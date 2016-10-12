import { Component, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from './../../models/chart.model';
import { ChartInterface } from './../../interfaces/models/chart.interface';
declare var zingchart: any;

@Component({
	selector: 'statistic',
	inputs: ['chart'],
	template: `<div id="{{ chart.id }}"></div>`
})
export class StatisticComponent implements AfterViewInit, OnDestroy {

	chart: ChartInterface;

	constructor(private zone: NgZone) { }

	ngAfterViewInit () {
		console.log('render chart', this.chart);
		this.zone.runOutsideAngular(() => zingchart.render(this.chart));
	}

	ngOnDestroy () {
		zingchart.exec(this.chart.id, 'destroy');
	}
}
