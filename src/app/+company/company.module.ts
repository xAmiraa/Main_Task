import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angualr Matrial
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import {MatTreeModule} from '@angular/material/tree';


// Routing

import { AppRoutingModule } from '../app-routing.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { MatRippleModule } from '@angular/material/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { ReactiveFormsModule } from '@angular/forms';
// Components

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    NewCompanyComponent
],
exports: [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTableModule,
    MatSidenavModule,
    CommonModule,
    CompanyRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,

    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatTreeModule,

  ]
})
export class CompanyModule { }
