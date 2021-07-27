import { Component, OnInit } from '@angular/core';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import * as $ from 'jquery';
import { Transaction } from 'src/shared/interfaces/transaction';
import { Helper } from 'src/shared/utils/helper';
import { NotificationService } from 'src/shared/services/notification/notification.service';
import { TransactionService } from 'src/shared/services/transaction.service';

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

  constructor(private transactionListComponent: TransactionListComponent, private helper: Helper, private notificationService : NotificationService,
    private transactionService: TransactionService) {
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
        await this.filterTransactionsByName();
      } else {
        this.transactionName = "";
        await this.filterTransactionsByStatus();
      }
      this.notificationService.showSuccess("Filtros aplicados com sucesso!","");
      this.transactionListComponent.transactions = this.transactionFilter;
    }
  }

  disableFilter(isDisabled: number) {
    this.disabledFilter = isDisabled == 1 ? true : false;
    let element = document.getElementById("transaction-list");
    if (element)
      element.style.marginTop = isDisabled == 0 ? "40px" : "160px";
  }

  async filterTransactionsByName() {
    await this.transactionListComponent.transactions.filter(
      async (transaction: Transaction) => {
        if (this.helper.removeAccents(transaction.title)?.toUpperCase() == this.transactionName.trim().toUpperCase())
          await this.transactionFilter.push(transaction);
      }
    );
  }

  async filterTransactionsByStatus() {
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
    this.notificationService.showSuccess("Filtros resetados com sucesso!","");
  }

  validateForm(): boolean | undefined {
    if (!this.filterOption) {
      this.notificationService.showError("Selecione uma opção de filtro","");
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
      this.notificationService.showError("Preencha o campo título!","");
      return false;
    } else if (this.transactionName.length < 3) {
      this.notificationService.showError("O campo título deve possuir no mínimo 3 caracteres!","");
      return false;
    }
    return true;
  }

  validateTransactionStatus() {
    if (!this.transactionStatus) {
       this.notificationService.showError("Selecione um status para o filtro!","");
      return false;
    }
    return true;
  }
}
