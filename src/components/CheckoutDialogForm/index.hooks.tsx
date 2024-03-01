import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectors, actions } from "@/spas/store-app/redux-store";
import { useDispatch, useSelector } from "react-redux";

type Address = {
  via: string;
  citta: string;
  stato: string;
  cap: string;
};
const addressSchema = yup.object({
  via: yup.string().required(),
  citta: yup.string().required(),
  stato: yup.string().required(),
  cap: yup.string().max(4).required(),
});

const schema = yup.object({
  spedizione: addressSchema.required(),
  fatturazione: addressSchema.required(),
  nome: yup.string().required().min(2),
  cognome: yup.string().required().min(2),
  numeroCarta: yup.number().required(),
  scadenza: yup.date().required(),
  cvv: yup.number().required().min(100).max(999),
});

type CheckoutDialogFormData = {
  spedizione: Address;
  fatturazione: Address;
  nome: string;
  cognome: string;
  numeroCarta: number;
  scadenza: Date;
  cvv: number;
};

const defaultAddress = { via: "", citta: "", stato: "", cap: "" };

export const useCheckoutDialogForm = () => {
  const dispatch = useDispatch();

  const cart = useSelector(selectors.getCartItems);

  const isOpen = useSelector(selectors.getIsDialogOpen);
  const onClose = useCallback(() => {
    dispatch(actions.setDialogIsOpen(false));
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
  console.log(errors);

  const handleCheckout = useMemo(
    () =>
      handleSubmit((data) => {
        console.log(data);
      }),
    [handleSubmit],
  );

  return {
    formData,
    submitDisabled,
    isOpen,
    onClose,
    cart,
    handleCheckout,
    errors,
  };
};
