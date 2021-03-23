import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-opera-form',
  templateUrl: './new-opera-form.component.html',
  styleUrls: ['./new-opera-form.component.css']
})
export class NewOperaFormComponent implements OnInit {

  newOperaForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.newOperaForm = this.fb.group({
      title: '',
      composer: '',
      year: '',
      language: ''
    })
  }

  showForm() {
    console.log(this.newOperaForm.value);
  }
}
