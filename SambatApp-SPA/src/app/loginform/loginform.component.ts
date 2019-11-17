import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  model: any = {};

  constructor(private authSrvice: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authSrvice.login(this.model).subscribe(
    next => {
      console.log('Signed in successfully');
    },
    error => {
      console.log('Failed to signed in');
    }
    );
  }
}
