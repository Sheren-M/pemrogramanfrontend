import { Component } from '@angular/core';
import { ValidateForm } from './validate-form/validate-form';
import { DynamicForm } from './dynamic-form/dynamic-form';
import { CrossFieldForm } from './cross-field-form/cross-field-form';
import { RegistrationForm } from './registration-form/registration-form';

@Component({
  selector: 'app-root',
  imports: [
    ValidateForm,
    DynamicForm,
    CrossFieldForm,
    RegistrationForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}