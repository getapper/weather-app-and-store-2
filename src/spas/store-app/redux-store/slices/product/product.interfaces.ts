import { StaticImageData } from "next/image";

type Product = {
  src: StaticImageData;
  label: string;
  price: number;
  id: number;
  descrizione: string;
  sku: string;
  disponibile: boolean;
  description: string;
};
export interface ProductState {
  currentElem: Product;
}
