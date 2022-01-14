import { createReducer, on, Action } from '@ngrx/store';
import { UserModel } from '@book-co/shared-models';
import {
  AuthApiActions,
  LoginPageActions,
  UserDropdownActions,
} from '@book-co/auth/actions';

export interface State {
  gettingStatus: boolean;
  user: null | UserModel;
  error: null | string;
}

const initialState: State = {
  gettingStatus: true,
  user: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(UserDropdownActions.logout, (state, action) => {
    return {
      gettingStatus: false,
      user: null,
      error: null,
    };
  }),
  on(LoginPageActions.login, (state, action) => {
    return {
      gettingStatus: true,
      user: null,
      error: null,
    };
  }),
  on(AuthApiActions.getAuthStatusSuccess, (state, action) => {
    return {
      gettingStatus: false,
      user: action.user,
      error: null,
    };
  }),
  on(AuthApiActions.loginSuccess, (state, action) => {
    return {
      gettingStatus: false,
      user: action.user,
      error: null,
    };
  }),
  on(AuthApiActions.loginFailure, (state, action) => {
    return {
      gettingStatus: false,
      user: null,
      error: action.reason,
    };
  })
);

export const selectGettingStatus = (state: State) => state.gettingStatus;
export const selectUser = (state: State) => state.user;
export const selectError = (state: State) => state.error;
