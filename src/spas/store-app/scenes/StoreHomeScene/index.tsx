import React, { memo } from "react";
import { useStoreHomeScene } from "./index.hooks";

type StoreHomeSceneProps = {};

export const StoreHomeScene = memo(({}: StoreHomeSceneProps) => {
  const {} = useStoreHomeScene();

  return <>ciao</>;
});

StoreHomeScene.displayName = "StoreHomeScene";
