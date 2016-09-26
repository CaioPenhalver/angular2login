import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  private users: Array<User>;
  private userLoggedin: User;

  constructor() { 
    this.users = new Array<User>();
    this.users.push(new User('caio', 'caio@caio.com', '123'));
  }

  get user(): User{
    return this.userLoggedin;
  }

  public register(user: User): void{
   this.users.push(user);
   console.log(this.users);
  }

  public login(email: string, password: string): User{
      for(let i=0; i < this.users.length; i++){
        if(this.users[i].email === email && this.users[i].password === password){
          this.userLoggedin = this.users[i];
        }
      }
      return  this.userLoggedin;
  }

  public logout(){
    this.userLoggedin = null;
  }

  public removeTest(user: User): void{
    this.users.splice(this.users.indexOf(user), 1);
    this.userLoggedin = null;
    console.log(this.users);
  }

  public editTest(oldUser: User, newUser: User){
    this.users[this.users.indexOf(oldUser)] = newUser;
    this.userLoggedin = newUser;
  }

  public remove(userIndex: number): void{
    
  }

  public edit(userIndex: number, newUser: User){

  }
}
