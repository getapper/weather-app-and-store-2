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

const arraySKU = ["ABC12345", "DEF67890", "GHI12345", "JKL67890"];

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
        sku: arraySKU[0],
        disponibile: true,
        description: description,
      },
      {
        src: tshirtblue,
        label: "Maglia  blu",
        price: 15,
        id: 1,
        descrizione: "bla bla bvaldasdhuhiuawdhadwaddaw",
        sku: arraySKU[1],
        disponibile: true,
        description: description,
      },
      {
        src: tshirtbianco2,
        label: "Maglia con scritta",
        price: 12,
        id: 2,
        descrizione: "bla bla bvaldasdhuhiuawdhadwaddaw",
        sku: arraySKU[2],
        disponibile: false,
        description: description,
      },
      {
        src: tshirtnera,
        label: "Maglia  nera",
        price: 11,
        id: 3,
        descrizione: "bla bla bvaldasdhuhiuawdhadwaddaw",
        sku: arraySKU[3],
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

  const handleAddToCart = useCallback(
    (product) => {
      if (product.disponibile) {
        dispatch(actions.addItemToCart(product));

        dispatch(
          actions.setFeedback({
            type: "success",
            message: "Prodotto aggiunto al carrello",
          }),
        );
      } else {
        dispatch(
          actions.setFeedback({
            type: "error",
            message: "Prodotto non disponibile",
          }),
        );
      }
    },
    [dispatch],
  );

  return { products, openProductDetails, handleAddToCart };
};
