import { Component, OnInit } from '@angular/core';
import { OPERA_DATA } from '../OPERA_DATA';

@Component({
  selector: 'app-operas',
  templateUrl: './operas.component.html',
  styleUrls: ['./operas.component.css']
})
export class OperasComponent implements OnInit {
  operas;
/**
 * operas! is a property
 */
  constructor() {
    this.operas = OPERA_DATA;
  }

  addOpera() {
    console.log("submit button clicked");
  }

  ngOnInit () {

  }
}
