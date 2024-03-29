import { useCallback, useMemo } from "react";
import tshirtbianco from "@/assets/t-shirt-bianco.jpg";
import tshirtblue from "@/assets/t-shirt-blue.jpg";
import tshirtbianco2 from "@/assets/t-shirt-fay-archive-bianco.jpg";
import tshirtnera from "@/assets/t-shirt-fay-archive-nero.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const useStoreHomeScene = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useMemo(() => {
    return [
      {
        src: tshirtbianco,
        label: "Maglia  bianca",
        price: 10,
        id: 0,
        descrizione: "bla bla bvaldasdhuhiuawdhadwaddaw",
        sku: "sku",
        disponibile: true,
        description: description,
      },
      {
        src: tshirtblue,
        label: "Maglia  blu",
        price: 15,
        id: 1,
        descrizione: "bla bla bvaldasdhuhiuawdhadwaddaw",
        sku: "sku",
        disponibile: true,
        description: description,
      },
      {
        src: tshirtbianco2,
        label: "Maglia con scritta",
        price: 12,
        id: 2,
        descrizione: "bla bla bvaldasdhuhiuawdhadwaddaw",
        sku: "sku",
        disponibile: false,
        description: description,
      },
      {
        src: tshirtnera,
        label: "Maglia  nera",
        price: 11,
        id: 3,
        descrizione: "bla bla bvaldasdhuhiuawdhadwaddaw",
        sku: "sku",
        disponibile: true,
        description: description,
      },
    ];
  }, []);

  const openProductDetails = useCallback(
    (id: string) => {
      dispatch(
        actions.setCurrentProduct(products.find((e) => e.id.toString() === id)),
      );
      navigate(`/product-details/${id}`);
    },
    [navigate, dispatch, products],
  );

  return { products, openProductDetails };
};
