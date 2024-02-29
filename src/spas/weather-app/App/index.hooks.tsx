import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/weather-app/redux-store";
import theme from "@/themes/index";

const useAppHooks = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectors.getFeedbackOpen);
  const type = useSelector(selectors.getFeedbackType);
  const message = useSelector(selectors.getFeedbackMessage);

  useEffect(() => {
    dispatch(actions.appStartup());
  }, [dispatch]);

  const handleClose = useCallback(() => {
    dispatch(actions.closeFeedback());
  }, [dispatch]);

  return {
    theme,
    open,
    type,
    message,
    handleClose,
  };
};

export default useAppHooks;
