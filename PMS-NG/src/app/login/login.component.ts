import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userLogin } from '../interfaces/login';
import { LoginService } from '../services/login.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  loggingIn: boolean = false;
  loggedInState: boolean = false;
  loggedIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private userService: UsersService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  async authenticateUser() {
    if (this.loginForm.invalid) {
      // Form is invalid, handle accordingly (show errors, etc.)
      return;
    }

    const data: userLogin = this.loginForm.value;

    this.loggingIn = true;

    try {
      let response = await this.loginService.login(data);

      if (response.message) {
        this.loggedInState = true;
        this.successMessage = response.message;
  
        this.loggedIn = true;
        localStorage.setItem('loggedIn', `${this.loggedIn}`);
  
        this.userService.checkDetails().subscribe(
          role => {
            setTimeout(async () => {
              this.successMessage = '';
              this.loggedInState = false;
  
              if (role === 'admin') {
                this.router.navigate(['admin']);
              } else if (role === 'user') {
                this.router.navigate(['user']);
              }
            }, 2000);
          },
          error => {
            console.error('Error fetching user details:', error);
          }
        );
      }
    }
    catch (error) {
      console.error('Error during login:', error);
      this.errorMessage = 'An unexpected error occurred.';
      setTimeout(() => {
        this.errorMessage = '';
        this.loggingIn = false;
      }, 3000);
    }
  }
}
