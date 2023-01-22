import { Component, OnInit } from '@angular/core';
import { CreateUserGQL } from 'src/generated-types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private readonly createUserGQL : CreateUserGQL){}

  ngOnInit(): void {}

  signUp({email,password}:any) {
    this.createUserGQL.mutate({createUserData:{email,password}}).subscribe(() =>{

    })
  }
}
