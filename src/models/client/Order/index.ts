import { IAddress } from "../Address";

export type IOrder = {
  spedizione: IAddress;
  fatturazione: IAddress;
  nome: string;
  cognome: string;
  numeroCarta: number;
  scadenza: Date;
  cvv: number;
  total: number;
};

export class Order implements IOrder {
  spedizione: IAddress;
  fatturazione: IAddress;
  nome: string;
  cognome: string;
  numeroCarta: number;
  scadenza: Date;
  cvv: number;
  total: number;
}
