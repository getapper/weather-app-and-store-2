import { useNavigate } from "react-router-dom";

export const useShopProduct = () => {
  const navigate = useNavigate();

  return { navigate };
};
