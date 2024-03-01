import useFormField from "@/hooks/useFormField";
import { useCallback, useEffect, useState } from "react";

type Address = {
  via: string;
  citta: string;
  stato: string;
  cap: number | "";
};

export const useFormAddress = (name) => {
  const { value, setValue, error } = useFormField<Address>({
    name,
  });
  const [isFirstRender, setIsFirstRender] = useState(true);

  /* useEffect(() => {
    if (isFirstRender) {
      const tmp: Address = { via: "", citta: "", stato: "", cap: "" };
      setValue(tmp);
      setIsFirstRender(false);
    }
  }, [isFirstRender, setValue]); */

  const handleChange = useCallback(
    (ev, type: string) => {
      const tmp = value;
      const t = Object.keys(value).find((k) => k === type);
      if (!!t) {
        tmp[t] = ev.target.value;
        setValue({ ...value, ...tmp });
      }
    },
    [setValue, value],
  );

  return {
    value,
    error,
    handleChange,
  };
};
