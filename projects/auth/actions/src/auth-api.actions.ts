import { UserModel } from '@book-co/shared-models';
import { createAction } from '@ngrx/store';

export const loginSuccess = createAction(
  '[Auth API] Login Success',
  (user: UserModel) => ({ user })
);
export const loginFailure = createAction(
  '[Auth API] Login Failure',
  (reason: string) => ({ reason })
);
export const getAuthStatusSuccess = createAction(
  '[Auth API] Get Auth Status Success',
  (user: UserModel | null) => ({ user })
);
