import { Component, OnInit } from '@angular/core';
import { OperaItemService } from '../opera-item.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

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
    this.sortByName();
  }

  sortByName() {
    this.operas.sort(
      (a: any, b: any) => (a.name > b.name) ? 1 : -1
    );
  }

  sortByYear() {
    this.operas.sort(this.compare);
  }

  compare(a: any, b: any) {
    const yearOne = a.year;
    const yearTwo = b.year;
    let comparison = 0;
    if (yearOne > yearTwo) {
      comparison = 1;
    } else if (yearOne < yearTwo) {
      comparison = -1;
    }
    return comparison;
  }
}
