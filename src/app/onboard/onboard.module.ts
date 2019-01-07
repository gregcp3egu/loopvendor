import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OnboardPage } from './onboard.page';
import { OnboardService } from './onboard.service';
import { CreateComponent } from '../owner-profile/create/create.component';
import { ProfilePage } from '../profile/profile.page';
import { ProfilePageModule } from '../profile/profile.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop/shop.component';
import { OwnerComponent } from './owner/owner.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardPage,
    children: [
      {
        path: 'owner',
        component: OwnerComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProfilePageModule,
    SharedModule,
  ],
  declarations: [OnboardPage, ShopComponent, OwnerComponent],
  providers: [
    OnboardService
  ]
})
export class OnboardPageModule {}
