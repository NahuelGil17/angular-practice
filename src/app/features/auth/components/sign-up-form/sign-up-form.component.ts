import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { passwordValidator } from 'src/app/core/validators/password.validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, passwordValidator()]],
      confirmPassword: [null, [Validators.required, passwordValidator()]],
    });
  }

  signUp() {
    if (this.signUpForm.valid) {
      const { name, email, password } = this.signUpForm.value;
      const signUp = this.authService.signUp(name, email, password);
      if (signUp) {
        // navigate to login
        console.log('navigate to login');
      }
    }
  }
}
