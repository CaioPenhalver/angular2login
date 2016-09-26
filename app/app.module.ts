
import {routing} from './app.routing';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {UserFormComponent} from './user-form/user-form.component';
import {HeaderComponent} from './header/header.component';
import {UserService} from './user.service';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserLoginComponent} from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HeaderComponent,
    UserProfileComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
