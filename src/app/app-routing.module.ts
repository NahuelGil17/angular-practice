import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { SignUpFormComponent } from './features/auth/components/sign-up-form/sign-up-form.component';
import { ProfileCardComponent } from './features/profile/components/profile-card/profile-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'profile', component: ProfileCardComponent },
  {
    path: 'signup',
    component: SignUpFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
