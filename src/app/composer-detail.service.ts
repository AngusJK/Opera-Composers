import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Composer } from './models/Composer';
import { COMPOSER_DATA } from './COMPOSER_DATA';
import { OPERA_DATA } from './OPERA_DATA';

@Injectable({
  providedIn: 'root'
})
export class ComposerDetailService {

  composers: any;
  operas: any;

  constructor(private http: HttpClient) {
    this.composers = COMPOSER_DATA;
    this.operas = OPERA_DATA;
  }

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

  getCurrentComposerOperas(composerName: string) {
    let filteredOperas = this.operas.filter((opera: any) => opera.composer === composerName)
    return filteredOperas;
  }

}


