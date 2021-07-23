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
    let url = environment.baseUrl + endpoint;
    return await axios.get(url)
      .then((response: AxiosResponse<Transaction[]>) => {
        return response;
      }).catch((error)=> {
        return error;
      })
  }
}
