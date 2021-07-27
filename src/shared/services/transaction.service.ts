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

  constructor(private notificationService: NotificationService, private helper: Helper) { }

  async getTransactions(endpoint: string) {
    let url = environment.baseUrl + endpoint;
    return await axios.get(url)
      .then((apiResponse: AxiosResponse<Transaction[]>) => {
        let response = this.helper.responseStatus(apiResponse);
        return response;
      }).catch(()=> {
        return this.notificationService.showError("Ocorreu um erro ao receber as transições!","Entre em contato com o administrador");
      })
  }

  async getTransactionDetails(endpoint: string, param: string | undefined) {
    let url = environment.baseUrl + endpoint + param;
    return await axios.get(url)
      .then((apiResponse: AxiosResponse<Transaction>) => {
        let response = this.helper.responseStatus(apiResponse);
        return response;
      }).catch(()=> {
        return this.notificationService.showError("Ocorreu um erro ao receber os detalhes da transição!","Entre em contato com o administrador");
      })
  }

  
}
