import { Component, OnInit } from '@angular/core';
import { Opera } from 'src/app/models/Opera';

@Component({
  selector: 'app-operas',
  templateUrl: './operas.component.html',
  styleUrls: ['./operas.component.css']
})
export class OperasComponent implements OnInit {
  operas!: Opera[];
/**
 * operas! is a property
 */
  constructor() { }

  ngOnInit() {
    this.operas = [
      {
        id: 1,
        name: "Don Giovanni",
        composer: "Mozart",
        language: "Italian",
        year: 1789
      },
      {
        id: 2,
        name: "Götterdämmerung",
        composer: "Wagner",
        language: "German",
        year: 1876
      },
      {
        id: 3,
        name: "La bohème",
        composer: "Puccini",
        language: "Italian",
        year: 1896
      }
    ]
  }

}
