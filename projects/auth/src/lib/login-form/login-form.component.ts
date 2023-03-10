import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface LoginEvent {
  username: string;
  password: string;
}

@Component({
  selector: 'bco-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() login = new EventEmitter<LoginEvent>();
  @Input() error: string | null = null;

  formGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    this.login.emit(this.formGroup.value as LoginEvent);
  }
}
