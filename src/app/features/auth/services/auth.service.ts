import { Injectable } from '@angular/core';

interface UserData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData!: UserData;
  constructor() {}

  getUserData() {
    return this.userData;
  }
  login(email: string, password: string) {
    this.userData = {
      email,
      password,
    };
    return true;
  }

  signUp(name: string, email: string, password: string) {
    return true;
  }
}
