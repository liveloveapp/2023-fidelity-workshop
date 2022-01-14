import { createAction } from '@ngrx/store';

export const enter = createAction('[Login Page] Enter');
export const login = createAction(
  '[Login Page] Login',
  (username: string, password: string) => ({
    username,
    password,
  })
);
