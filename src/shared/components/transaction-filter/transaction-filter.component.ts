import { Component, OnInit } from '@angular/core';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import * as $ from 'jquery';
import { Transaction } from 'src/shared/interfaces/transaction';
import { Helper } from 'src/shared/utils/enums/helpers';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.less'],
})

export class TransactionFilterComponent implements OnInit {
  filterOption: any;
  transactionStatus: any;
  transactionName: string;
  transactionFilter: Transaction[] = [];
  disabledFilter: boolean = false;

  constructor(private transactionListComponent: TransactionListComponent, private helper: Helper) {
    this.transactionName = '';
  }

  ngOnInit(): void { }
  async reloadTransactions() {
    await this.btnCleanFilters();
  }
  async btnFilterTransactions() {
    await this.transactionListComponent.getTransactionList();
    this.transactionFilter = [];
    let isValid = await this.validateForm();
    if (isValid) {
      if (this.filterOption == '0') {
        this.transactionStatus = null;
        await this.FilterTransactionsByName();
      } else {
        this.transactionName = "";
        await this.FilterTransactionsByStatus();
      }
      this.transactionListComponent.transactions = this.transactionFilter;
    }
  }

  disableFilter(isDisabled: number) {
    this.disabledFilter = isDisabled == 1 ? true : false;
    let element = document.getElementById("transaction-list");
    if (element)
      element.style.marginTop = isDisabled == 0 ? "40px" : "160px";
  }

  async FilterTransactionsByName() {
    await this.transactionListComponent.transactions.filter(
      async (transaction: Transaction) => {
        if (this.helper.removeAccents(transaction.title)?.toUpperCase() == this.transactionName.trim().toUpperCase())
          await this.transactionFilter.push(transaction);
      }
    );
  }

  async FilterTransactionsByStatus() {
    await this.transactionListComponent.transactions.filter(
      async (transaction: Transaction) => {
        if (transaction.status == this.transactionStatus)
          await this.transactionFilter.push(transaction);
      }
    );
  }

  async btnCleanFilters() {
    await this.transactionListComponent.getTransactionList();
    this.filterOption = null;
    this.transactionName = "";
    this.transactionStatus = null;
  }

  validateForm(): boolean | undefined {
    if (!this.filterOption) {
      console.log('NAO TEM OPCAO DO FILTRO');
      return false;
    } else {
      if (this.filterOption == '0') {
        return this.validateTransactionName();
      } else {
        return this.validateTransactionStatus();
      }
    }
  }

  validateTransactionName() {
    if (!this.transactionName) {
      console.log('NAO TEM NOME');
      return false;
    } else if (this.transactionName.length < 3) {
      console.log('O filtro deve possuir no mínimo 3 caracteres!');
      return false;
    }
    return true;
  }

  validateTransactionStatus() {
    if (!this.transactionStatus) {
      console.log('NAO TEM STATUS');
      return false;
    }
    return true;
  }
}
