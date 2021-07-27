import { Component, OnInit } from '@angular/core';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import * as $ from 'jquery';
import { Transaction } from 'src/shared/interfaces/transaction';
import { Helper } from 'src/shared/utils/helper';
import { NotificationService } from 'src/shared/services/notification/notification.service';
import { TransactionService } from 'src/shared/services/transaction.service';
import { LoadingService } from 'src/shared/services/loading/loading.service';

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
    private transactionService: TransactionService, private loadingService: LoadingService) {
    this.transactionName = '';
  }

  ngOnInit(): void { }

  async reloadTransactions() {
    await this.btnCleanFilters();
  }

  async btnFilterTransactions() {
    this.loadingService.showLoading();
    await this.transactionListComponent.getTransactionList();
    this.loadingService.hideLoading();
    this.transactionFilter = [];
    let isValid = await this.validateForm();
    if (isValid) {
      if (this.filterOption == '0') {
        this.transactionStatus = null;
        this.loadingService.showLoading();
        await this.filterTransactionsByName();
        this.loadingService.hideLoading();
      } else {
        this.transactionName = "";
        this.loadingService.showLoading();
        await this.filterTransactionsByStatus();
        this.loadingService.hideLoading();
      }
      this.notificationService.showSuccess("Filtros aplicados com sucesso!","");
      if (this.transactionFilter.length == 0) {
      this.notificationService.showError("Não foi encontrada nenhuma transação!","");
      return;
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
    this.loadingService.showLoading();
    await this.transactionListComponent.getTransactionList();
    this.loadingService.hideLoading();
    this.filterOption = null;
    this.transactionName = "";
    this.transactionStatus = null;
    this.notificationService.showSuccess("Filtros resetados com sucesso!","");
  }

  async validateForm() {
    if (!this.filterOption) {
      this.notificationService.showError("Selecione uma opção de filtro","");
      return false;
    } else {
      if (this.filterOption == '0') {
        return await this.validateTransactionName();
      } else {
        return await this.validateTransactionStatus();
      }
    }
  }

  async validateTransactionName() {
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
