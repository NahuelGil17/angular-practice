import { RandomGreetingPipe } from './random-greeting.pipe';

describe('RandomGreetingPipe', () => {
  it('create an instance', () => {
    const pipe = new RandomGreetingPipe();
    expect(pipe).toBeTruthy();
  });
});
