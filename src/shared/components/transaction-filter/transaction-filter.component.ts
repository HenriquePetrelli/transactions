import { Component, OnInit } from '@angular/core';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.less']
})

export class TransactionFilterComponent implements OnInit {
  filterOption: any;
  transactionStatus: any;
  transactionName: string;
  constructor(private transactionListComponent: TransactionListComponent) {
    this.transactionName = "";
  }

  ngOnInit(): void {
  }

  async btnFilterTransactions() {
    let isValid = await this.validateForm();
    if (isValid) {
      if (this.filterOption == "0")
        console.log("FILTER");
      //TODO: implementar filter
      let transactions = this.transactionListComponent.transactions;
      let teste = await this.transactionListComponent.transactions.filter((transaction: string) => transaction == this.transactionName);
      console.log(teste)
    } else {
      this.FilterTransactionsByStatus();
    }
  }

  async FilterTransactionsByName(element: string, index: any, array: any) {
    let filterResult = (element == this.transactionName);
    return filterResult;
  }

  FilterTransactionsByStatus() {

  }

  validateForm(): boolean | undefined {
    if (!this.filterOption) {
      console.log("NAO TEM OPCAO DO FILTRO");
      return false;
    } else {
      if (this.filterOption == "0") {
        return this.validateTransactionName();
      } else {
        return this.validateTransactionStatus();
      }
    }
  }

  validateTransactionName() {
    if (!this.transactionName) {
      console.log("NAO TEM NOME");
      return false;
    } else if (this.transactionName.length < 3) {
      console.log('O filtro deve possuir no mínimo 3 caracteres!');
      return false;
    }
    return true;
  }

  validateTransactionStatus() {
    if (!this.transactionStatus) {
      console.log("NAO TEM STATUS");
      return false;
    }
    return true;
  }
}