import { TransferReadComponent } from './components/transfer/transfer-read/transfer-read.component';
import { TransferCreateComponent } from './components/transfer/transfer-create/transfer-create.component';
import { TransferCrudComponent } from './views/transfer-crud/transfer-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "transfer",
    component: TransferCrudComponent
  },
  {
    path: "transfer/create",
    component: TransferCreateComponent
  },
  {
    path: "transfer/:cpf",
    component: TransferReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
