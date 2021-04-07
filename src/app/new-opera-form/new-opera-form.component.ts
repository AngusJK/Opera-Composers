import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComposerDetailService } from '../composer-detail.service';
import { OperaItemService } from '../opera-item.service';

@Component({
  selector: 'app-new-opera-form',
  templateUrl: './new-opera-form.component.html',
  styleUrls: ['./new-opera-form.component.css']
})
export class NewOperaFormComponent implements OnInit {

  newOperaForm!: FormGroup;
  composers: string[] = this.composerDetailService.getComposerNames()
  languages: string[] = ["Czech", "English", "French", "German", "Hungarian", "Italian", "Russian"];
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private composerDetailService: ComposerDetailService,
    private operaItemService: OperaItemService
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.newOperaForm = this.fb.group({
      title: '',
      composer: '',
      librettist: '',
      year: '',
      language: '',
      summary: ''
    })
  }

  pickComposer(event: any) {
    this.newOperaForm.patchValue({
      composer: event.target.value
    })
  }

  pickLanguage(event: any) {
    this.newOperaForm.patchValue({
      language: event.target.value
    })
  }

  submitForm() {
    let newValues = this.newOperaForm.value;
    let newOpera = {
      name: newValues.title,
      composer: newValues.composer,
      librettist: newValues.librettist,
      year: newValues.year,
      language: newValues.language,
      summary: newValues.summary
    }
    this.operaItemService.addNewOpera(newOpera);
    this.formSubmitted = true;
  }



}
