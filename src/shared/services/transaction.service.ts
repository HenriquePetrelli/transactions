import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import axios, { AxiosResponse } from 'axios';
import { Transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  async getTransactions(endpoint: string) {
    let api = environment.baseUrl + endpoint;
    let request;
    await axios.get(api)
      .then((response: AxiosResponse<Transaction[]>) => {
        request = response.data;
      }).catch(()=> {
        console.log("ERRO!!");
      })
      return request;
  }
}
