import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SlidesGuard } from './slides.guard';
import { ProfilePage } from './profile/profile.page';
import { OnboardService } from './onboard/onboard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate: [AuthGuard, OnboardService]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthPageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'owner', 
    loadChildren: './owner-profile/owner-profile.module#OwnerProfilePageModule' 
  },
  { 
    path: 'onboard', 
    loadChildren: './onboard/onboard.module#OnboardPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'slides',
    loadChildren: './slides/slides.module#SlidesPageModule',
    // canActivate: [SlidesGuard] 
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SlidesGuard, OnboardService]
})
export class AppRoutingModule { }
