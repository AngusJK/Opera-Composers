import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composers',
  templateUrl: './composers.component.html',
  styleUrls: ['./composers.component.css']
})
export class ComposersComponent implements OnInit {

  composers = [
    { id: 1, name: "Wolfgang Amadeus Mozart", birthYear: 1756, deathYear: 1791, country: "Austria" },
    { id: 2, name: "Richard Wagner", birthYear: 1813, deathYear: 1886, country: "Germany" },
    { id: 3, name: "Giuseppe Verdi", birthYear: 1813, deathYear: 1901, country: "Italy" },
    { id: 4, name: "Giacomo Puccini", birthYear: 1856, deathYear: 1924, country: "Italy" },
    { id: 5, name: "Benjamin Britten", birthYear: 1913, deathYear: 1976, country: "Great Britain" },
    { id: 6, name: "Richard Strauss", birthYear: 1864, deathYear: 1949, country: "Germany" },
    { id: 7, name: "Sergei Prokofiev", birthYear: 1891, deathYear: 1953, country: "Russia" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
