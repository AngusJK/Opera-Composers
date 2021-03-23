import { Component, OnInit } from '@angular/core';
import { COMPOSER_DATA } from '../COMPOSER_DATA';


@Component({
  selector: 'app-composers',
  templateUrl: './composers.component.html',
  styleUrls: ['./composers.component.css']
})
export class ComposersComponent implements OnInit {

  composers: any;

  constructor() {
    this.composers = COMPOSER_DATA;
  }

  ngOnInit(): void {
  }

}
