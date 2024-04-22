import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../sharedComponents/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/feature/admin/admin.component';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
