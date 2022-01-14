import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '@book-co/shared-models';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '@book-co/shared-state-auth';
import { UserDropdownActions } from '@book-co/auth/actions';

@Component({
  selector: 'bco-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss'],
})
export class UserDropdownComponent {
  user$: Observable<UserModel | null>;

  constructor(private store: Store) {
    this.user$ = store.select(selectAuthUser);
  }

  onLogout() {
    this.store.dispatch(UserDropdownActions.logout());
  }
}
