import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { MapPage } from '../map/map.page';
import { ScannerPage } from './scanner/scanner.page';
import { AnalyticsPage } from '../analytics/analytics.page';
import { ProductsPage } from '../products/products.page';
import { SalesPage } from '../sales/sales.page';
import { ProfilePage } from '../profile/profile.page';
import { EditProfileComponent } from '../profile/edit-profile/edit-profile.component';
import { CreateComponent } from '../products/create/create.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(analytics:analytics)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path: 'map',
        outlet: 'map',
        component: MapPage
      },
      { path: 'scanner',
        outlet: 'scanner',
        component: ScannerPage
      },
      { path: 'analytics',
        outlet: 'analytics',
        component: AnalyticsPage
      },
      { path: 'products',
        outlet: 'products',
        component: ProductsPage
        //loadChildren: '../products/products.module#ProductsPageModule'
      },
      { path: 'create',
        outlet: 'products',
        component: CreateComponent
        //loadChildren: '../products/products.module#ProductsPageModule'
      },
      { path: 'sales',
        outlet: 'sales',
        component: SalesPage
      },
      { path: 'profile',
        outlet: 'profile',
        component: ProfilePage
      },
      { path: 'edit-profile',
        outlet: 'profile',
        component: EditProfileComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(analytics:analytics)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
