import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PostComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
