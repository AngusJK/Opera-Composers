import { Component, OnInit, Input } from '@angular/core';
// import { Opera } from 'src/app/models/Opera';
// import { OPERA_DATA } from '../OPERA_DATA';
import { ActivatedRoute } from '@angular/router';
import { OperaItemService } from './opera-item.service';

@Component({
  selector: 'app-opera-item',
  templateUrl: './opera-item.component.html',
  styleUrls: ['./opera-item.component.css']
})
export class OperaItemComponent implements OnInit {

  //@Input() opera!: Opera;
  opera: any;

  constructor(private route:ActivatedRoute, private operaItemService:OperaItemService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      this.operaItemService.getOpera(params.get('id'))
      .subscribe(opera => {
        this.opera = opera;
      })
    })
  }

}
