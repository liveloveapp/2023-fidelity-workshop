import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { SharedStateAuthModule } from '@book-co/shared-state-auth';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthEffects } from './auth.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    EffectsModule.forFeature([AuthEffects]),
    SharedStateAuthModule,
  ],
  declarations: [UserDropdownComponent, LoginFormComponent, LoginPageComponent],
  exports: [UserDropdownComponent, LoginPageComponent],
})
export class AuthModule {}
