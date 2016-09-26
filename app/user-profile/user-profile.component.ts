import {Subscription} from '../../../node_modules/rxjs/src/Subscription';
import {ActivatedRoute, Router} from '@angular/router/src';
import {User} from '../user';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit, OnDestroy {
 

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
   }

   get user(): User{
     return this.userService.user;
   }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('name')){
          if(this.userService.user.username !== params['name']){
            this.router.navigate(['/']);
          }
        }
      }
    );
  }

  onEdit(){
    
  }

  onRemove(){
    this.userService.removeTest(this.user);
    this.router.navigate(['/']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
