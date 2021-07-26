import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/shared/components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionListComponent } from '../shared/components/transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from '../shared/components/transaction-details/transaction-details.component';
import { TransactionFilterComponent } from 'src/shared/components/transaction-filter/transaction-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransactionListComponent,
    TransactionDetailsComponent,
    TransactionFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TransactionListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
