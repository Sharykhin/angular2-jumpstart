import { PupilInterface } from './../models/pupil.interface';
import {Observable} from 'rxjs/Rx';

export interface PupilApiInterface {
    getPupils(): Observable<PupilInterface[]>;

    getPupil(id: string): Observable<PupilInterface>
}
