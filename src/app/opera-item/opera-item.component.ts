import { ComposerDetailService } from './../composer-detail.service';
import { Component, OnInit, Input } from '@angular/core';
// import { Opera } from 'src/app/models/Opera';
// import { OPERA_DATA } from '../OPERA_DATA';
import { ActivatedRoute } from '@angular/router';
import { OperaItemService } from '../opera-item.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-opera-item',
  templateUrl: './opera-item.component.html',
  styleUrls: ['./opera-item.component.css']
})
export class OperaItemComponent implements OnInit {

  opera: any;

  constructor(
    private route:ActivatedRoute,
    private operaItemService:OperaItemService,
    private ComposerDetailService:ComposerDetailService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getOpera();
  }

  getOpera(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
      this.operaItemService.getOpera(id)
      .subscribe(opera => {
        this.opera = opera;
      })
  }

  back(): void {
    this.location.back();
  }
}
