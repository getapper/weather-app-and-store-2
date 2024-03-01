import { useNavigate } from "react-router-dom";

export const useNavButton = () => {
  const navigate = useNavigate();
  return { navigate };
};
