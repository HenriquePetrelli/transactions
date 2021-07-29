import { Injectable } from "@angular/core"
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class Helper {

  constructor() { }

  removeAccents(str: string | undefined) {
    return str?.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  convertRealForDollar(real: number) {
    let dollar = real * 5.12;
    return dollar.toFixed(2);
  }

  getUrlApi() {
    let lSLanguage = localStorage.getItem('country');
    switch (lSLanguage) {
      case "0":
      case "1":
        return "https://6101e98a27d22500174b225c.mockapi.io/warren-transactions/api/v1/";
      case "2":
        return environment.baseUrl;

      default:
        return environment.baseUrl;
    }
  }

  getTransactionsEndpointByLanguage(language: string, endpoint: string) {
    switch (language) {
      case "0":
        return "pt-br/"
      case "1":
        return "en/";
      case "2":
        return endpoint;

      default:
        return endpoint;
    }
  }

  responseStatus(response: any) {
    let lSLanguage = localStorage.getItem('country');
    switch (response.status) {
      case 200: {
        response.sucesso = true;
        return response;
      }

      case 400: {
        response.sucesso = false;
        response.message = response.message;
        return response;
      }

      case 404: {
        response.sucesso = false;
        response.message = lSLanguage == '1' ? "Check internet connection" : "Verifique a conexão com a internet";
        return response;
      }

      case 500: {
        response.sucesso = false;
        response.message = response.message;
        return response;
      }

      case 600: {
        response.sucesso = false;
        response.message = response.message;
        return response;
      }

      default: {
        response.sucesso = false;
        response.message = lSLanguage == '1' ? "An error occurred! Contact the administrator!" : "Ocorreu um erro! Entre em contato com o administrador!";
        return response;
      }
    }
  }
}