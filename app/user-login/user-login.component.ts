import {Router} from '@angular/router/src';
import {User} from '../user';
import {UserService} from '../user.service';
import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styles: []
})
export class UserLoginComponent implements OnInit {

  private myForm: FormGroup;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  get user(): User{
     return this.userService.user;
   }

  onSubmit(myForm: FormGroup){
    this.myForm = myForm;
    this.userService.login(myForm.value.email, myForm.value.password);
    if(this.user !== null){
      this.router.navigate([this.user.username, 'profile']);
    }
  }

}
