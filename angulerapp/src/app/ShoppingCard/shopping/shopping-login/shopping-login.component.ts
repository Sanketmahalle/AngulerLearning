import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-login',
  templateUrl: './shopping-login.component.html',
  styleUrls: ['./shopping-login.component.css']
})
export class ShoppingLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
  
    // TODO: call the authentication service to verify the credentials
    // If the credentials are correct, navigate to the home page
    if (email === 'test@test.com' && password === 'test123') {
      this.router.navigate(['/shoppinghome']);
    }

    this.http.post('http://localhost:3000/users', this.loginForm.value).subscribe(response => {
      console.log(response);
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}