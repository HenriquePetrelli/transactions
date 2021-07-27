import { Injectable } from "@angular/core"
import { AppComponent } from "src/app/app.component";

@Injectable({
    providedIn: 'root',
})
export class Helper {

    constructor() { }

    removeAccents(str: string | undefined) {
        return str?.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    responseStatus(response: any) {
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
            response.message = "Verifique a conexão com a internet";
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
            response.message =
              "Ocorreu um erro! Entre em contato com o administrador!";
            return response;
          }
        }
      }
}