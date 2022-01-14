import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectAuthGettingStatus,
  selectAuthUser,
  selectAuthError,
} from '@book-co/shared-state-auth';
import { UserModel } from '@book-co/shared-models';
import { LoginPageActions } from '@book-co/auth/actions';
import { LoginEvent } from '../login-form/login-form.component';

@Component({
  selector: 'bco-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  gettingStatus$: Observable<boolean>;
  user$: Observable<UserModel | null>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.gettingStatus$ = store.select(selectAuthGettingStatus);
    this.user$ = store.select(selectAuthUser);
    this.error$ = store.select(selectAuthError);
  }

  onLogin($event: LoginEvent) {
    this.store.dispatch(
      LoginPageActions.login($event.username, $event.password)
    );
  }
}
