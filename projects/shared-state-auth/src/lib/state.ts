import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const FEATURE_KEY = 'shared-auth';

/**
 * State Shape
 */
export interface State {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Module
 */
@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class SharedStateAuthModule {}

/**
 * Feature Selectors
 */
export const selectSharedAuthState = createFeatureSelector<State>(FEATURE_KEY);

/**
 * Auth Selectors
 */
export const selectAuthState = createSelector(
  selectSharedAuthState,
  (state: State) => state.auth
);
export const selectAuthGettingStatus = createSelector(
  selectAuthState,
  fromAuth.selectGettingStatus
);
export const selectAuthUser = createSelector(
  selectAuthState,
  fromAuth.selectUser
);
export const selectAuthError = createSelector(
  selectAuthState,
  fromAuth.selectError
);
