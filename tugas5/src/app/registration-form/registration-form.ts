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
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css'
})
export class RegistrationForm {

  form = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),

      lastName: new FormControl('', Validators.required),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      address: new FormControl('', Validators.required),

      rt: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),

      rw: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),

      kelurahan: new FormControl('', Validators.required),

      kecamatan: new FormControl('', Validators.required),

      gender: new FormControl('', Validators.required),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

      passwordConfirmation: new FormControl('', Validators.required),

      reasonJoin: new FormControl('', Validators.required)
    },
    {
      validators: this.passwordMatchValidator
    }
  );

  passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {

    const password = control.get('password')?.value;
    const confirmation = control.get('passwordConfirmation')?.value;

    if (password !== confirmation) {
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

  onReset() {
    this.form.reset();
  }
}