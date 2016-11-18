import {PupilInterface} from './../interfaces/pupil.interface';

export class Pupil implements PupilInterface {

	public name: string;
	public className: string;
	public level: number;

	constructor(name: string, className: string, level: number) {
		this.name = name;
		this.className = className;
		this.level = level;
	}
}
