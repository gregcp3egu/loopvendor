import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products.page';
import { SharedModule } from '../shared/shared.module';
// import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  // {
  //   path: 'create',
  //   component: CreateComponent,
  //   outlet: 'products'
  // },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
