import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  msg;
  // DI 
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login(username, password) {
   var result = this.authService.checkuser(username, password);
   if(result == true) {
    this.route.navigate(['/product']);
   } else {
    this.msg = 'Invalid user name or password'
   }

  }
}

