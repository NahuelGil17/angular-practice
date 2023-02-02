import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { ProfileModule } from './features/profile/profile.module';
import { FormButtonComponent } from './shared/components/form-button/form-button.component';

@NgModule({
  declarations: [AppComponent, FormButtonComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, ProfileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
