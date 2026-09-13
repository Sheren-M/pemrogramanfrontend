import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-cross-field-form',
  imports: [ReactiveFormsModule],
  templateUrl: './cross-field-form.html',
  styleUrl: './cross-field-form.css'
})
export class CrossFieldForm {

  form = new FormGroup(
    {
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),

      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),

      birthDate: new FormControl('', Validators.required),

      gender: new FormControl('', Validators.required),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

      confirmPassword: new FormControl('', Validators.required)
    },
    {
      validators: this.passwordMatchValidator
    }
  );

  passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {

    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Data pendaftaran:', this.form.value);
      alert('Pendaftaran berhasil!');
    } else {
      this.form.markAllAsTouched();
    }
  }
}