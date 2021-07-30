import { Transaction } from "./transaction";

//Interface utilizada para tipar retorno de API
export interface ServerData {
    data: Transaction;
    status: number;
    statusText: string;
    sucesso: boolean;
    message: string;
  }