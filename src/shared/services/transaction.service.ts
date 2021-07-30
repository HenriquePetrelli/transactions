import { Helper } from './../utils/helper';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import axios, { AxiosResponse } from 'axios';
import { Transaction } from '../interfaces/transaction';
import { NotificationService } from './notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  lSLanguage: string | null;
  constructor(private notificationService: NotificationService, private helper: Helper) {
    this.lSLanguage = localStorage.getItem('country');
  }

  //Chamada para API para receber lista de transações
  async getTransactions(endpoint: string) {
    let url = this.helper.getUrlApi() + endpoint;
    return await axios.get(url)
      .then((apiResponse: AxiosResponse<Transaction[]>) => {
        let response = this.helper.responseStatus(apiResponse);
        return response;
      }).catch(() => {
        let errorBodyMsg = this.lSLanguage == '1' ?
          'There was an error receiving the transactions!' : 'Ocorreu um erro ao receber as transação!';
        let errorTitleMsg = this.lSLanguage == '1' ?
          'Contact the administrator' : 'Entre em contato com o administrador';
        return this.notificationService.showError(errorBodyMsg, errorTitleMsg);
      })
  }

   //Chamada para API para receber detalhes de transação
  async getTransactionDetails(endpoint: string | null, param: string | undefined) {
    if (!endpoint)
      console.log("NAO TEM ENPOINT");
    let url = this.helper.getUrlApi() + endpoint + param;
    return await axios.get(url)
      .then((apiResponse: AxiosResponse<Transaction>) => {
        let response = this.helper.responseStatus(apiResponse);
        return response;
      }).catch(() => {
        let errorBodyMsg = this.lSLanguage == '1' ?
          'There was an error receiving the transaction details!' : 'Ocorreu um erro ao receber as os detalhes da transação!';
        let errorTitleMsg = this.lSLanguage == '1' ?
          'Contact the administrator' : 'Entre em contato com o administrador';
        return this.notificationService.showError(errorBodyMsg, errorTitleMsg);
      })
  }


}
