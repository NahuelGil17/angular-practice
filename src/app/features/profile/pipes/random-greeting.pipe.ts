import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomGreeting',
})
export class RandomGreetingPipe implements PipeTransform {
  greetings: string[] = ['Hello', 'Hi', 'Hey', "What's up"];

  transform(value: string, args?: any): string {
    let randomGreeting =
      this.greetings[Math.floor(Math.random() * this.greetings.length)];
    return `${randomGreeting}, ${value}`;
  }
}
