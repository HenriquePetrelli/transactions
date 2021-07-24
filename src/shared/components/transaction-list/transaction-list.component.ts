import { Component, OnInit } from '@angular/core';
import { ServerData } from 'src/shared/interfaces/server-data';
import { Transaction } from 'src/shared/interfaces/transaction';
import { TransactionService } from 'src/shared/services/transaction.service';
import { Status } from 'src/shared/utils/enums/transactions';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.less']
})
export class TransactionListComponent implements OnInit {
  transactions: any;
  enumStatus: any;
  constructor(private _service: TransactionService) {
    this.enumStatus = Status;  
   }

  async ngOnInit(): Promise<void> {
    await this.getTransactionList();
  }

  async getTransactionList() {      
   await this._service.getTransactions("transactions")
    .then(async (response: ServerData) => {
     this.transactions = response.data; 
    //  this.translateStatus();
    }).catch(()=> {
      console.log("ERRO!!");
    })
  }

  // translateStatus() {
  //   this.transactions.forEach((item: { status: string; }) => {
  //     let transactionStatus = item.status;
  //     item.status = this.enumStatus.transactionStatus;
  //   });
  // }

}
