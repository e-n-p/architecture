import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './components/feature/account/account.component';
import { SharedModule } from '../../sharedComponents/shared.module';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
