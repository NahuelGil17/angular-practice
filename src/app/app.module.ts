import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { ProfileCardComponent } from './features/profile/components/profile-card/profile-card.component';
import { RandomGreetingPipe } from './features/profile/pipes/random-greeting.pipe';
import { FormButtonComponent } from './shared/components/form-button/form-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    RandomGreetingPipe,
    FormButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
