import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/feature/account/account.component';

const routes: Routes = [
  {path: 'home/:id', component: AccountComponent},
  {path: 'home', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
