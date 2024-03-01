export type IAddress = {
  via: string;
  citta: string;
  stato: string;
  cap: number | "";
};

export class Address implements IAddress {
  via: string;
  citta: string;
  stato: string;
  cap: number | "";
}
