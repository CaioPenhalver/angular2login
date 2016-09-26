import {User} from '../user';
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {Subscription} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  private submited: boolean = false;
  private myForm: FormGroup;
  private subscription: Subscription;
  private newUser: boolean = true;
  private userLoggedin: boolean = false;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private userSetvice: UserService) { 
  }

  ngOnInit() {
    this.subscription = this.route.url.subscribe(
      (url: Array<any>) => {
        for(let i=0; i < url.length; i++){
          if(url[i] === 'edit'){
            this.newUser = false;
          }
          if(url[i] === this.userService.user.username){
            this.userLoggedin = true;
          }
        }
        if(this.newUser && !this.userLoggedin){
             this.user = new User(null, null, null);
        }else if(!this.newUser && this.userLoggedin){
          this.user = this.userService.user;
        }
      }
    )
  }

  onSubmit(myForm:FormGroup){
    const NewUser: User = new User(myForm.value.username, myForm.value.email, myForm.value.password);
    if(this.newUser && !this.userLoggedin){
             this.userService.register(NewUser);
        }else if(!this.newUser && this.userLoggedin){
            this.userService.editTest(this.user, NewUser);
        }
    
    this.myForm = myForm;
    this.onClear();
  }

  onClear(){
    this.myForm.reset();
  }
}
