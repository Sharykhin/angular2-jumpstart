import { PupilInterface } from './../models/pupil.interface';
import {Observable} from 'rxjs/Rx';

export interface PupilApiInterface {
    getPupils(): Observable<PupilInterface[]>;

    getPupil(id: string): Observable<PupilInterface>;

    removePupil(id: string): Observable<boolean>

    createPupil(pupil: PupilInterface): Observable<PupilInterface>;

    updatePupil(id: string, pupil: PupilInterface): Observable<PupilInterface>;
}
