import { IOrder } from "@/models/client/Order";

export interface OrdersState {
  list: IOrder[];
  currentOrder: IOrder;
}
