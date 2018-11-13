import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { loginRoutes } from './login.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(loginRoutes), SharedModule],
  declarations: [LoginFormComponent]
})
export class LoginModule {}
