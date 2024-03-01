import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectors, actions } from "@/spas/store-app/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { IAddress } from "@/models/client/Address";

const addressSchema = yup.object({
  via: yup.string().required(),
  citta: yup.string().required(),
  stato: yup.string().required(),
  cap: yup.string().length(6).required(),
});

const schema = yup.object({
  spedizione: addressSchema.required(),
  fatturazione: addressSchema.required(),
  nome: yup.string().required().min(2),
  cognome: yup.string().required().min(2),
  numeroCarta: yup
    .string()
    .length(16, "La stringa deve essere lunga 16 caratteri")
    .matches(/^\d+$/, "Deve essere un numero"),
  scadenza: yup.date().required(),
  cvv: yup
    .string()
    .length(3, "La stringa deve essere lunga 3 caratteri")
    .matches(/^\d+$/, "Deve essere un numero"),
});

type CheckoutDialogFormData = {
  spedizione: IAddress;
  fatturazione: IAddress;
  nome: string;
  cognome: string;
  numeroCarta: number;
  scadenza: Date;
  cvv: number;
};

const defaultAddress: IAddress = { via: "", citta: "", stato: "", cap: "" };

export const useCheckoutDialogForm = () => {
  const dispatch = useDispatch();

  const cart = useSelector(selectors.getCartItems);

  const isOpen = useSelector(selectors.getIsCheckoutDialogOpen);
  const onClose = useCallback(() => {
    dispatch(actions.setCheckoutDialogIsOpen(false));
  }, [dispatch]);

  const formData = useForm<CheckoutDialogFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      spedizione: defaultAddress,
      fatturazione: defaultAddress,
      nome: "",
      cognome: "",
      numeroCarta: null,
      scadenza: null,
      cvv: null,
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, product) => {
      return (acc += product.price);
    }, 0);
  }, [cart]);

  const handleCheckout = useMemo(
    () =>
      handleSubmit(async (data) => {
        try {
          dispatch(actions.setCheckoutDialogIsOpen(false));

          const result = await fakeExternalServiceCheckout(data);
          dispatch(
            actions.setFeedback({
              type: result === "OK" ? "success" : "error",
              message:
                result === "OK"
                  ? "Transazione avvenuta con successo"
                  : "Ops.. qualcosa è andato storto",
            }),
          );
          const order = { ...data, total: cartTotal, cart };
          dispatch(actions.addOrder(order));
          dispatch(actions.setCurrentOrder(order));
        } catch (e) {
          console.log(e);
        }
      }),
    [cartTotal, dispatch, handleSubmit, cart],
  );

  return {
    formData,
    submitDisabled,
    isOpen,
    onClose,
    cart,
    handleCheckout,
    errors,
    cartTotal,
  };
};

async function fakeExternalServiceCheckout(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("OK");
    }, 1000);
  });
}
