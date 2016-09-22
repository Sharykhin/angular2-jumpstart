import { PupilInterface } from './../interfaces/models/pupil.interface';

export class PupilModel implements PupilInterface {

    constructor(    	
   		public name?: string,
   		public className?: string,
   		public level: number = 0
   	) {}
}
