import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ComposerDetailService } from '../composer-detail.service';

@Component({
  selector: 'app-new-opera-form',
  templateUrl: './new-opera-form.component.html',
  styleUrls: ['./new-opera-form.component.css']
})
export class NewOperaFormComponent implements OnInit {

  newOperaForm!: FormGroup;

  constructor(private fb: FormBuilder, private composerDetailService: ComposerDetailService) { }

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
