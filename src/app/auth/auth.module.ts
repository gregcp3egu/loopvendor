import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'resetpassword',
        component: ResetPasswordComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  declarations: [AuthPage, 
    LoginComponent, 
    ResetPasswordComponent, 
    RegisterComponent]
})


export class AuthPageModule {}
