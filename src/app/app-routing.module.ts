import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './+company/company/company.component';

const routes: Routes = [
  {
    path: '',
 
    loadChildren: () =>
      import('./+company/company.module').then(m => m.CompanyModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
