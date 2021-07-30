import { Component, OnInit } from '@angular/core';
import { ServerData } from 'src/shared/interfaces/server-data';
import { Transaction } from 'src/shared/interfaces/transaction';
import { LoadingService } from 'src/shared/services/loading/loading.service';
import { ModalService } from 'src/shared/services/modal/modal.service';
import { NotificationService } from 'src/shared/services/notification/notification.service';
import { TransactionService } from 'src/shared/services/transaction.service';
import { Helper } from 'src/shared/utils/helper';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.less']
})

export class TransactionListComponent implements OnInit {
  bodyText!: string;
  lSLanguage: string | null;
  transactions: any;
  transactionDetail: Transaction = {};

  constructor(private transactionService: TransactionService,
    private modalService: ModalService,
    private notificationService: NotificationService,
    private loadingService: LoadingService,
    private helper: Helper) {
    if (!this.transactionDetail) {
      this.closeModal("modal");
    }
    this.lSLanguage = "2";
  }

  async ngOnInit(): Promise<void> {
    await this.verifyLocalStorageLanguage();
  }

  //Verifica se possui idioma escolhido no localStorage
  async verifyLocalStorageLanguage() {
    this.loadingService.showLoading();
    this.lSLanguage = localStorage.getItem('country');
    this.loadingService.hideLoading();
    await this.getTransactionList();
  }

  //Pega transações de Api de acordo com idioma
  async getTransactionList() {
    if (this.lSLanguage) {
      let endpoint = this.helper.getTransactionsEndpointByLanguage(this.lSLanguage, "transactions");
      this.loadingService.showLoading();
      await this.transactionService.getTransactions(endpoint)
        .then((response: ServerData) => {
          if (!response.sucesso) {
            this.loadingService.hideLoading();
            return this.notificationService.showError(response.message, "");
          }
          this.transactions = response.data;
          if (this.lSLanguage == "1") {
            this.convertRealForDollar(this.transactions);
          }

          this.loadingService.hideLoading();
        }).catch(() => {
          this.loadingService.hideLoading();
          this.notificationService.showError("Ocorreu um erro ao receber as transições!", "");
        })
    }
  }

  //Pega detalhes de transação de Api de acordo com idioma
  async getTransactionDetails(id: string | undefined) {
    this.loadingService.showLoading();
    if (this.lSLanguage) {
      let endpoint = await this.helper.getTransactionsEndpointByLanguage(this.lSLanguage, "transactions")
      if (endpoint)
        await this.transactionService.getTransactionDetails(endpoint, id)
          .then((response: ServerData) => {
            if (!response.sucesso) {
              this.loadingService.hideLoading();
              return this.notificationService.showError(response.message, "");
            }

            this.loadingService.hideLoading();
            this.transactionDetail = response.data;
            this.openModal("modal");

            if (response.data.status)
              this.fillStep(response.data.status);
          }).catch(() => {
            this.loadingService.hideLoading();
            let errorMsg = this.lSLanguage == '1' ?
              'There was an error receiving the transition details!' : 'Ocorreu um erro ao receber os detalhes da transição!';
            this.notificationService.showError(errorMsg, "");
          })
    }
  }

  // Configura estilo de steps
  async fillStep(status: string) {
    let step1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");
    let step3 = document.getElementById("step3");
    if (step1 && step2 && step3) {
      step1.className = "circle";
      step2.className = "circle";
      step3.className = "circle";
    }

    this.changeStepClass(status, step1, step2, step3);
  }

  // Altera step corrente de acordo com status da transição
  changeStepClass(status: string, step1: HTMLElement | null, step2: HTMLElement | null, step3: HTMLElement | null) {
    if (step1 && step2 && step3) {
      switch (status) {
        case "created":
          {
            step1.classList.add("current");
          }
          break;

        case "processing":
          {
            step1.classList.add("done");
            step2.classList.add("current");
          }
          break;

        case "processed":
          {
            step1.classList.add("done");
            step2.classList.add("done");
            step3.classList.add("done");
          }
          break;

        default:
          break;
      }
    }
  }

  //Converte real para dolar dependendo do idioma selecionado
  convertRealForDollar(transactions: Transaction[]) {
    transactions.forEach((transaction: any) => {
      transaction.amount = this.helper.convertRealForDollar(transaction.amount);
    });
  }

  // Abre modal
  openModal(id: string) {
    this.modalService.open(id);
  }

  // Fecha modal
  closeModal(id: string) {
    this.modalService.close(id);
  }
}
