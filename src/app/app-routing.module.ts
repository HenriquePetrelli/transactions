import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailsComponent } from 'src/shared/components/transaction-details/transaction-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [
    // DetailModalService,
    // TransactionDetailsComponent
  ]
})
export class AppRoutingModule {}
