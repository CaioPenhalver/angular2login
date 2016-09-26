import {UserLoginComponent} from './user-login/user-login.component';
import {Routes, RouterModule} from '@angular/router/src';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserFormComponent} from './user-form/user-form.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: UserLoginComponent},
    {path: 'register', component: UserFormComponent},
    {path: ':name/profile', component: UserProfileComponent},
    {path: ':name/edit', component: UserFormComponent},
    {path: '**', redirectTo: '/login'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);