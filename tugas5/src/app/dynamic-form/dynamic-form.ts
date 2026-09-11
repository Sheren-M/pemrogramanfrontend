import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

interface FormQuestion {
  key: string;
  label: string;
  type: string;
  required: boolean;
  controlType: 'textbox' | 'dropdown';
  options?: string[];
}

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css'
})
export class DynamicForm {

  questions: FormQuestion[] = [
    {
      key: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
      controlType: 'textbox'
    },
    {
      key: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      controlType: 'textbox'
    },
    {
      key: 'braveryRating',
      label: 'Bravery Rating',
      type: '',
      required: true,
      controlType: 'dropdown',
      options: [
        'Solid',
        'Great',
        'Good',
        'Unproven'
      ]
    }
  ];

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    braveryRating: new FormControl('', Validators.required)
  });

  submitted = false;

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      console.log('Data form:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
} 