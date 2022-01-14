import { Injectable } from '@angular/core';
import { timer, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import * as uuid from 'uuid';
import { UserModel } from '@book-co/shared-models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string) {
    if (password !== 'password' || !username.trim()) {
      return throwError(new Error('Invalid username or password'));
    }

    return timer(750).pipe(
      map(() => {
        const user = { id: uuid.v4(), username };

        localStorage.setItem('auth', JSON.stringify(user));

        return user;
      })
    );
  }

  getStatus(): Observable<null | UserModel> {
    return timer(750).pipe(
      map(() => {
        const userString = localStorage.getItem('auth');

        if (!userString) return null;

        return JSON.parse(userString);
      })
    );
  }

  logout() {
    localStorage.removeItem('auth');
  }
}
