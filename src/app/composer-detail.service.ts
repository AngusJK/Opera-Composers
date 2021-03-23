import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Composer } from './models/Composer';
import { COMPOSER_DATA } from './COMPOSER_DATA';

@Injectable({
  providedIn: 'root'
})
export class ComposerDetailService {

  composers: any;

  constructor(private http: HttpClient) {
    this.composers = COMPOSER_DATA;
  }

  //composer: any;

  getComposer(id:number) : Observable<Composer> {
    return this.getComposerList()
    .pipe(
      map(composers => {
        return composers.filter(composer => composer.id === id)[0]
      })
    )
  }

  getComposerList() : Observable<Composer[]> {
    return of( this.composers );
  }

}


