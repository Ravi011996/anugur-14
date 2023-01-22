import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    BrowserAnimationsModule, 
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink:HttpLink) => {
        return {
          caches: new InMemoryCache(),
          link: httpLink.create({
            uri: 'api/graphql'
          })
        };
      },
      deps: [HttpLink]
    }, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
