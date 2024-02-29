import { Box, Typography, Stack, Divider } from "@mui/material";
import { useState } from "react";

export const useWheaterAppHomeScene = (weather, getDataFromCode) => {
  const [selected, setSelected] = useState(null);
  const { daily, hourly } = weather;
  const dailyWeather = [];
  const hourlyWeather = [];

  for (let i = 0; i < daily.len; i++) {
    const data = getDataFromCode(daily.weatherCode[i], 80);
    const day = new Date(daily.time[i]).toLocaleDateString("it-IT", {
      weekday: "short",
    });
    const date = day.charAt(0).toUpperCase().concat(day.slice(1));
    const comp = (
      <Box key={i}>
        <Typography>{date}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={220}
          height={270}
          bgcolor={selected === i + 1 ? "lightgrey" : "white"}
          p={2}
          borderRadius="10px"
          boxShadow={"5px 5px 12px -10px"}
          onClick={() =>
            selected === i + 1 ? setSelected(null) : setSelected(i + 1)
          }
          zIndex={1000}
        >
          <Typography pb={3} fontSize={18}>
            {data.type}
          </Typography>
          {data.image}
          <Stack
            direction="row"
            justifyContent="center"
            width="90%"
            py={2}
            spacing={2}
          >
            <Typography fontSize={25}>{daily.maxTemp[i]}°</Typography>
            <Typography fontSize={25} sx={{ opacity: 0.5 }}>
              {daily.minTemp[i]}°
            </Typography>
          </Stack>
        </Box>
      </Box>
    );
    dailyWeather.push(comp);
  }

  for (let i = 0; i < hourly.len; i++) {
    const data = getDataFromCode(hourly.weatherCode[i], 100);
    const date = new Date(hourly.time[i]);
    const hour = `${date.getHours()}:00`;
    const comp = (
      <Box
        key={daily.len + i}
        display={"flex"}
        flexDirection={"row"}
        width="100%"
        minWidth={500}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width={"100%"}
          height={190}
          bgcolor="#d2dde2"
          p={2}
          borderRadius="10px"
          boxShadow={"5px 5px 10px -20px"}
        >
          <Typography
            ml={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={25}
          >
            {hour}
          </Typography>
          {data.image}
          <Typography fontSize={25}>{data.type}</Typography>

          <Stack direction="column" justifyContent="space-around" py={1} mr={4}>
            <Box>
              <Typography fontSize={15}>Temp</Typography>
              <Typography fontSize={20}>{hourly.temperature[i]}°</Typography>
            </Box>
            <Box sx={{ opacity: 0.5 }}>
              <Typography fontSize={15}>Pioggia</Typography>
              <Typography fontSize={20}>{hourly.precipitations[i]}%</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
    hourlyWeather.push(comp);
  }

  return { dailyWeather, hourlyWeather, selected, setSelected };
};
