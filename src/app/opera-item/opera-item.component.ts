import { Component, OnInit, Input } from '@angular/core';
import { Opera } from 'src/app/models/Opera';
import { OPERA_DATA } from '../OPERA_DATA';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opera-item',
  templateUrl: './opera-item.component.html',
  styleUrls: ['./opera-item.component.css']
})
export class OperaItemComponent implements OnInit {
  /**
   * creates input property
   */
  @Input() opera!: Opera;
  operas = OPERA_DATA;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {


    })
  }

}
