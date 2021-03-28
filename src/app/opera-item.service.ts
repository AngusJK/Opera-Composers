import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Opera } from './models/Opera';
import { OPERA_DATA } from './OPERA_DATA';

@Injectable({
  providedIn: 'root'
})
export class OperaItemService {

  operas: any;

  constructor(private http: HttpClient) {
    this.operas = OPERA_DATA;
  }

  getOpera(id:number) : Observable<Opera> {
    return this.getOperaList()
    .pipe(
      map(operas => {
        return operas.filter(opera => opera.id === id)[0]
      })
    )
  }

  getOperas() {
    return this.operas;
  }

  getOperaList() : Observable<Opera[]> {
    return of( this.operas )
  }

  addNewOpera(newOpera: any) {
    newOpera.id = this.operas.length+1;
    this.operas.push(newOpera);
  }

}
