import { IAddress } from "../Address";
import { IProduct } from "../Product";

export type IOrder = {
  spedizione: IAddress;
  fatturazione: IAddress;
  nome: string;
  cognome: string;
  numeroCarta: number;
  scadenza: Date;
  cvv: number;
  cart: IProduct[];
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
  cart: IProduct[];
}
