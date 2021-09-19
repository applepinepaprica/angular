import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  myForm: FormGroup; 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.myForm = this.fb.group({
    email: '',
    phones: this.fb.array([])
  })
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }

  addPhone() {

    const phone = this.fb.group({ 
      area: [],
      prefix: [],
      line: [],
    })

    this.phoneForms.push(phone);
  }

  deletePhone(i: any) {
    this.phoneForms.removeAt(i)
  }

}
