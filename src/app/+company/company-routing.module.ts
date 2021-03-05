import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company/company.component';
import { NewCompanyComponent } from './new-company/new-company.component';
// Components

const routes: Routes = [

  {path:'',component:CompanyComponent,
  children:[
    {

      path: 'company-list',
      component: CompanyListComponent,
      // canActivate: [NgxPermissionsGuard],
      // data: { permissions: { only: ['Manager'], redirectTo: '/dashboard' } },
    },
    {
      path: 'new-company',
      component: NewCompanyComponent,
      // canActivate: [NgxPermissionsGuard],
      // data: { permissions: { only: ['Manager'], redirectTo: '/dashboard' } },
    },

  ]},
   
  
 
];
@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
