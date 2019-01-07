import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerProfilePage } from './owner-profile.page';
// import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileService } from './profile.service';

const routes: Routes = [
  {
    path: '',
    component: OwnerProfilePage,
    children: [
      // {
      //   path: 'create',
      //   component: CreateComponent
      // },
      {
        path: 'edit',
        component: EditComponent
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
    SharedModule
  ],
  declarations: [
    OwnerProfilePage, 
    // CreateComponent, 
    EditComponent,
  ],
  providers: [
    ProfileService
  ]
})
export class OwnerProfilePageModule {}
