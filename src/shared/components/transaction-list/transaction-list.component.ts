import { Component, OnInit } from '@angular/core';
import { ServerData } from 'src/shared/interfaces/server-data';
import { Transaction } from 'src/shared/interfaces/transaction';
import { ModalService } from 'src/shared/services/modal.service';
import { TransactionService } from 'src/shared/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.less']
})

export class TransactionListComponent implements OnInit {
  transactions: any;
  enumStatus: any;
  bodyText!: string;
  transactionDetail: Transaction = {};

  constructor(private transactionService: TransactionService, private modalService: ModalService) {
    if (!this.transactionDetail) {
      this.closeModal("modal");
    }
    // this.enumStatus = Status;
  }

  async ngOnInit(): Promise<void> {
    await this.getTransactionList();
  }

  async getTransactionList() {
    await this.transactionService.getTransactions("transactions")
      .then((response: ServerData) => {
        this.transactions = response.data;

        console.log(typeof (this.transactions));
      }).catch(() => {
        console.log("ERRO!!");
      })
  }

  async getTransactionDetails(id: string | undefined) {
    await this.transactionService.getTransactionsById("transactions/", id)
      .then((response: ServerData) => {
        this.transactionDetail = response.data;
        this.openModal("modal");
        if (response.data.status)
          this.fillStepper(response.data.status);
      }).catch(() => {
        console.log("ERRO!!");
      })
  }

  async fillStepper(status: string) {
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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
