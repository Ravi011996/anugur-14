import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';


const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
  },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpModule),
  // },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: '**',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/