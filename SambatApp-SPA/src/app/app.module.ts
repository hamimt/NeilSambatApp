import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { LoginformComponent } from './loginform/loginform.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      LoginformComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule, // digunakan untuk consume service di client
      FormsModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
