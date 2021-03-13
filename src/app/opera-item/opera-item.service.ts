import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Opera } from '../models/Opera';

@Injectable({
  providedIn: 'root'
})
export class OperaItemService {

  constructor(private http: HttpClient) {

  }

  getOpera(id:number) : Observable<Opera> {
    return this.getOperaList()
    .pipe(
      map(actors => {
        return actors.filter(opera => opera.id === id)[0]
      })
    )
  }

  getOperaList() : Observable<Opera[]> {
    return of([
      {"id":1,"name":"Don Giovanni","composer":"Mozart","language":"Italian","year":1789},
      {"id":2,"name":"Götterdämmerung","composer":"Wagner","language":"German","year":1876},
      {"id":3,"name":"La bohème","composer":"Puccini","language":"Italian","year":1896},
  ])
  }


}
