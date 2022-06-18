import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Guards/auth.guard';

const routes: Routes = [
  {path:'UserProfile',component: UserProfileComponent,canActivate:[AuthGuard]},
  {path:'editProfile',component: EditProfileComponent,canActivate:[AuthGuard]}
]

// lazy loading => async routing
@NgModule({
  declarations: [
    UserProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class UserModule { }
