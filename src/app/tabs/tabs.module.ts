import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { MapPageModule } from '../map/map.module';
import { ScannerPageModule } from './scanner/scanner.module';
import { AnalyticsPageModule } from '../analytics/analytics.module';
import { ProductsPageModule } from '../products/products.module';
import { SalesPageModule } from '../sales/sales.module';
import { ProfilePageModule } from '../profile/profile.module';
import { EditProfileComponent } from '../profile/edit-profile/edit-profile.component';
import { CreateComponent } from '../products/create/create.component';
import { ViewComponent } from '../products/view/view.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    MapPageModule,
    ScannerPageModule,
    AnalyticsPageModule,
    ProductsPageModule,
    SalesPageModule,
    ProfilePageModule,
    ReactiveFormsModule,

  ],
  declarations: [
    TabsPage, 
    EditProfileComponent, 
    CreateComponent,
  ViewComponent]
})
export class TabsPageModule {}
