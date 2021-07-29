import { Component, OnInit } from '@angular/core';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { Transaction } from 'src/shared/interfaces/transaction';
import { Helper } from 'src/shared/utils/helper';
import { NotificationService } from 'src/shared/services/notification/notification.service';
import { LoadingService } from 'src/shared/services/loading/loading.service';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.less'],
})
export class TransactionFilterComponent implements OnInit {
  filterOption: any;
  lSLanguage: string | null;
  transactionStatus: any;
  transactionName: string;
  transactionFilter: Transaction[] = [];
  disabledFilter: boolean = false;

  constructor(
    private transactionListComponent: TransactionListComponent,
    private helper: Helper,
    private notificationService: NotificationService,
    private loadingService: LoadingService
  ) {
    this.transactionName = '';
    this.lSLanguage = '2';
  }

  ngOnInit(): void {
    this.verifyLocalStorageLanguage();
  }

  async reloadTransactions() {
    await this.getTransactionList();
  }

  async btnFilterTransactions() {
    this.loadingService.showLoading();
    await this.transactionListComponent.getTransactionList();
    this.loadingService.hideLoading();
    this.transactionFilter = [];
    let isValid = await this.validateForm();
    if (isValid) {
      this.filterTransactions();
      this.loadingService.hideLoading();
      let successMsg = this.lSLanguage == '1' ? 'Filters successfully applied!' : 'Filtros aplicados com sucesso!';
      this.notificationService.showSuccess(
        successMsg,
        ''
      );
      if (this.transactionFilter.length == 0) {
        let errorMsg = this.lSLanguage == '1' ?
          'No transaction found!' : 'Não foi encontrada nenhuma transação!';
        this.notificationService.showError(
          errorMsg,
          ''
        );
        return;
      }
      this.transactionListComponent.transactions = this.transactionFilter;
    }
  }

  async filterTransactions() {
    if (this.filterOption == '0') {
      this.transactionStatus = null;
      return await this.filterTransactionsByName();

    } else {
      this.transactionName = '';
      return await this.filterTransactionsByStatus();
    }
  }

  async verifyLocalStorageLanguage() {
    this.loadingService.showLoading();
    this.lSLanguage = localStorage.getItem('country');
    this.loadingService.hideLoading();
  }

  disableFilter(isDisabled: number) {
    this.disabledFilter = isDisabled == 1 ? true : false;
    let element = document.getElementById('transaction-list');
    if (element) element.style.marginTop = isDisabled == 0 ? '40px' : '160px';
  }

  async filterTransactionsByName() {
    await this.transactionListComponent.transactions.filter(
      async (transaction: Transaction) => {
        if (
          this.helper.removeAccents(transaction.title)?.toUpperCase() ==
          this.transactionName.trim().toUpperCase()
        )
          this.transactionFilter.push(transaction);
      }
    );
  }

  async filterTransactionsByStatus() {
    await this.transactionListComponent.transactions.filter(
      async (transaction: Transaction) => {
        let transactionStatus = transaction.status;
        if (transactionStatus == this.transactionStatus)
          this.transactionFilter.push(transaction);
      }
    );
  }

  async btnCleanFilters() {
    this.getTransactionList();
    this.filterOption = null;
    this.transactionName = '';
    this.transactionStatus = null;
    let successMsg = this.lSLanguage == '1' ? 'Filters reset successfully!' : 'Filtros resetados com sucesso!';
    this.notificationService.showSuccess(successMsg, '');
  }

  async getTransactionList() {
    this.loadingService.showLoading();
    await this.transactionListComponent.getTransactionList();
    this.loadingService.hideLoading();
  }

  async validateForm() {
    if (!this.filterOption) {
      let errorMsg = this.lSLanguage == '1' ?
        'Select a filter option' : 'Selecione uma opção de filtro';
      this.notificationService.showError(errorMsg, '');
      return false;
    } else {
      if (this.filterOption == '0') {
        return await this.validateTransactionName();
      } else {
        return this.validateTransactionStatus();
      }
    }
  }

  async validateTransactionName() {
    if (!this.transactionName) {
      let errorMsg = this.lSLanguage == '1' ?
        'Fill in the title field!' : 'Preencha o campo título!';
      this.notificationService.showError(errorMsg, '');
      return false;
    } else if (this.transactionName.length < 3) {
      let errorMsg = this.lSLanguage == '1' ?
      'The title field must be at least 3 characters long!' :  'O campo título deve possuir no mínimo 3 caracteres!';
      this.notificationService.showError(
        errorMsg,
        ''
      );
      return false;
    }
    return true;
  }

  validateTransactionStatus() {
    if (!this.transactionStatus) {
      let errorMsg = this.lSLanguage == '1' ?
      'Please select a status for the filter!' : 'Selecione um status para o filtro!';
      this.notificationService.showError(
        errorMsg,
        ''
      );
      return false;
    }
    return true;
  }
}
