import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/shared/interfaces/transaction';
import { TransactionService } from 'src/shared/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.less']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  constructor(private _service: TransactionService) {
   }

  async ngOnInit(): Promise<void> {
    await this.getTransactionList();
  }

  async getTransactionList() {
   await this._service.getTransactions("transactions")
    .then(async (response: any) => {
     await this.transactions.push(response);
      console.log(this.transactions)
    }).catch(()=> {
      console.log("ERRO!!");
    })

  }

}
