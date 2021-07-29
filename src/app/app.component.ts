import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Opera Composers';
  constructor(private http: HttpClient, private titleService: Title) {
    titleService.setTitle('Opera Composers')
  }

  activeState = "";

  changeActive() {
    this.activeState = "blue";
  }

}
