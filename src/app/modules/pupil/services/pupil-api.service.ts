import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { PupilApiInterface } from './../interfaces/services/pupil-api.interface';
import { PupilInterface } from './../interfaces/models/pupil.interface';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PupilApiService implements PupilApiInterface {

    constructor(
        private http: Http,
        @Inject('ApiEndpoint') private apiEndPoint: string
    ) {

    }

    public getPupils(): Observable<PupilInterface[]> {
        return this.http.get(`${this.apiEndPoint}/pupils`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getPupil(id: string): Observable<PupilInterface> {
        return this.http.get(`${this.apiEndPoint}/pupils/${id}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    public removePupil(id: string): Observable<boolean> {
        return this.http.delete(`${this.apiEndPoint}/pupils/${id}`)
                .map((res: Response) => res.json().count === 1)
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public createPupil(pupil: PupilInterface): Observable<PupilInterface> {
        let body = JSON.stringify(pupil);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        
        return this.http.post(`${this.apiEndPoint}/pupils`, body, options)
                .map((res: Response) => res.json())
                .catch((error: any) =>  { console.error(error); return Observable.throw(error.json().error || 'Server error'); });
    }

    public updatePupil(id: string, pupil: PupilInterface): Observable<PupilInterface> {
        let body = JSON.stringify(pupil);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.put(`${this.apiEndPoint}/pupils/${id}`, body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => { console.error(error); return Observable.throw(error.json().error || 'Server error'); });
    }
}
