import React, { memo } from "react";
import StoreAppSpa from "@/spas/store-app";

type StoreAppProps = {};

const StoreApp = memo(({}: StoreAppProps) => {
  return <StoreAppSpa />;
});
StoreApp.displayName = "StoreApp";

export default StoreApp;
