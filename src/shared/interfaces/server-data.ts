import { Transaction } from "./transaction";

export interface ServerData {
    data: Transaction;
    status: number;
    statusText: string;
  }