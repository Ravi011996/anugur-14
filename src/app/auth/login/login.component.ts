import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  constructor(){}

  ngOnInit(): void {}

  login({email,password}:any) {
    console.log(email);
    console.log(password);
  }
}
