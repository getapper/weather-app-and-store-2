import React, { memo } from "react";
import { useWheaterAppHomeScene } from "./index.hooks";
import { Container, Typography, Stack } from "@mui/material";
import useWeather from "@/hooks/useWeather";

type WheaterAppHomeSceneProps = {};

export const WheaterAppHomeScene = memo(({}: WheaterAppHomeSceneProps) => {
  const { weather, getDataFromCode } = useWeather();
  const { dailyWeather, hourlyWeather, selected } = useWheaterAppHomeScene(
    weather,
    getDataFromCode,
  );

  return (
    <Container
      sx={{
        bgcolor: "white",
        height: "100vh",
        p: 4,
        textAlign: "center",
        userSelect: "none",
      }}
      maxWidth={false}
    >
      <Typography variant="h3" fontWeight={700}>
        Meteo della settimana
      </Typography>
      <Stack alignItems="center" p={6}>
        <Stack direction="row" columnGap={3}>
          {dailyWeather}
        </Stack>
      </Stack>
      <Stack
        display={!selected && "none"}
        bgcolor="#fcfcfc"
        alignItems="center"
        pl={6}
        width="80%"
        margin="auto"
        maxHeight={400}
        sx={{
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
        borderRadius="10px"
      >
        <Stack direction="column" width={"100%"} spacing={1}>
          {hourlyWeather.filter(
            (el, index) =>
              index >= 24 * (selected - 1) && index < 24 * selected,
          )}
        </Stack>
      </Stack>
    </Container>
  );
});

WheaterAppHomeScene.displayName = "WheaterAppHomeScene";
