import { StaticImageData } from "next/image";

export type IProduct = {
  src: StaticImageData;
  label: string;
  price: number;
  id: number;
  descrizione: string;
  sku: string;
  disponibile: boolean;
  description: string;
};

export class Product implements IProduct {
  src: StaticImageData;
  label: string;
  price: number;
  id: number;
  descrizione: string;
  sku: string;
  disponibile: boolean;
  description: string;
}
