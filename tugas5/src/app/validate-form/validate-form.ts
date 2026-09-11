import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-validate-form',
  imports: [ReactiveFormsModule],
  templateUrl: './validate-form.html',
  styleUrl: './validate-form.css'
})
export class ValidateForm {

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Form berhasil:', this.form.value);
      alert('Form berhasil dikirim!');
    } else {
      this.form.markAllAsTouched();
    }
  }
}