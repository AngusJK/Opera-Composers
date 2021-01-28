import { Component, OnInit, Input } from '@angular/core';
import { Opera } from 'src/app/models/Opera';

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

  constructor() { }

  ngOnInit() {
  }

}
