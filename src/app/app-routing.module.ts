import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', 
  loadChildren: './tabs/tabs.module#TabsPageModule',
  canActivate: [AuthGuard]  
},
  { path: 'map', 
  loadChildren: './map/map.module#MapPageModule',
  canActivate: [AuthGuard]   },
  { 
    path: 'scanner', 
  loadChildren: 
  './tabs/scanner/scanner.module#ScannerPageModule',
  canActivate: [AuthGuard]   },
  { 
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthPageModule'},
  { 
    path: 'list', 
  loadChildren: './list/list.module#ListPageModule',
  canActivate: [AuthGuard]   },
  { 
    path: 'contact', 
    loadChildren: './contact/contact.module#ContactPageModule',
    canActivate: [AuthGuard]   },
  { 
    path: 'about', 
    loadChildren: './about/about.module#AboutPageModule' },
  { path: 
    'analytics', 
    loadChildren: './analytics/analytics.module#AnalyticsPageModule',
    canActivate: [AuthGuard]   },
  { path: 'products', 
  loadChildren: './products/products.module#ProductsPageModule',
  canActivate: [AuthGuard]   },
  { 
    path: 'sales', 
    loadChildren: './sales/sales.module#SalesPageModule',
    canActivate: [AuthGuard]   },
  { 
    path: 'profile', 
    loadChildren: './profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuard]   },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
