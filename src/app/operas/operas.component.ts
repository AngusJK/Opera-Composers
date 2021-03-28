import { Component, OnInit } from '@angular/core';
import { OperaItemService } from '../opera-item.service';

@Component({
  selector: 'app-operas',
  templateUrl: './operas.component.html',
  styleUrls: ['./operas.component.css']
})
export class OperasComponent implements OnInit {

  operas: any;

  constructor(private operaItemService: OperaItemService) {}

  addOpera() {
    console.log("submit button clicked");
  }

  showComposer() {
    console.log(this.operas);
  }

  ngOnInit () {
    this.operas = this.operaItemService.getOperas();
  }

}
