import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComposerDetailService } from '../composer-detail.service';

@Component({
  selector: 'app-new-opera-form',
  templateUrl: './new-opera-form.component.html',
  styleUrls: ['./new-opera-form.component.css']
})
export class NewOperaFormComponent implements OnInit {

  newOperaForm!: FormGroup;
  composers: string[] = this.composerDetailService.getComposerNames()

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

  pickComposer(event: any) {
    this.newOperaForm.patchValue({
      composer: event.target.value
    })
  }

  showForm() {
    console.log(this.composers);
  }
}
