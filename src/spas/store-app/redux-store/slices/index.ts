import * as extraActions from "../extra-actions";
import * as ajax from "./ajax";
import * as feedback from "./feedback";
import * as product from "./product";
import * as cart from "./cart";
import * as UI from "./UI";

export const reducers = {
  ajax: ajax.ajaxStore.reducer,
  feedback: feedback.feedbackStore.reducer,
  product: product.productStore.reducer,
  cart: cart.cartStore.reducer,
  UI: UI.UIStore.reducer,
};

export const actions = {
  ...extraActions,
  ...ajax.ajaxStore.actions,
  ...feedback.feedbackStore.actions,
  ...product.productStore.actions,
  ...cart.cartStore.actions,
  ...UI.UIStore.actions,
};

export const selectors = {
  ...ajax.selectors,
  ...feedback.selectors,
  ...product.selectors,
  ...cart.selectors,
  ...UI.selectors,
};

export const sagas = [
  ...Object.values(ajax.sagas),
  ...Object.values(feedback.sagas),
  ...Object.values(product.sagas),
  ...Object.values(cart.sagas),
  ...Object.values(UI.sagas),
];
