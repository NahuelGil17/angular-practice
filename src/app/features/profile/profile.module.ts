import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { RandomGreetingPipe } from './pipes/random-greeting.pipe';

@NgModule({
  declarations: [ProfileCardComponent, RandomGreetingPipe],
  imports: [CommonModule],
  exports: [ProfileCardComponent],
})
export class ProfileModule {}
