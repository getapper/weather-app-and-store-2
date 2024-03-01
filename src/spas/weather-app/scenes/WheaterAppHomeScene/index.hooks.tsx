import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
import { hours } from "@/constants/hours";

type WeatherElem = {
  weatherCode: number[];
  precipitazioni: number[];
  temperature: number[];
  minTemp: number;
  maxTemp: number;
};

type WeatherData = {
  lunedi: WeatherElem;
  martedi: WeatherElem;
  mercoledi: WeatherElem;
  giovedi: WeatherElem;
  venerdi: WeatherElem;
};

export const useWheaterAppHomeScene = (
  weather: WeatherData,
  getDataFromCode,
) => {
  const [selected, setSelected] = useState(null);
  const daysNames = Object.keys(weather);
  const days = Object.values(weather);

  const dailyWeather = Object.values(weather).map((elem: WeatherElem, i) => {
    const data = getDataFromCode(elem.weatherCode[i], 80);
    return (
      <Box key={i}>
        <Typography>
          {daysNames[i].charAt(0).toUpperCase() + daysNames[i].slice(1)}
        </Typography>
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
            <Typography fontSize={25}>{elem.maxTemp}°</Typography>
            <Typography fontSize={25} sx={{ opacity: 0.5 }}>
              {elem.minTemp}°
            </Typography>
          </Stack>
        </Box>
      </Box>
    );
  });

  const hourlyWeather = [];
  daysNames.forEach((elem, i) => {
    const day: WeatherElem = days[i];
    hours.forEach((hour, j) => {
      const data = getDataFromCode(day.weatherCode[j], 100);

      const tmp = (
        <Box
          key={j}
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

            <Stack
              direction="column"
              justifyContent="space-around"
              py={1}
              mr={4}
            >
              <Box>
                <Typography fontSize={15}>Temp</Typography>
                <Typography fontSize={20}>{day?.temperature[j]}°</Typography>
              </Box>
              <Box sx={{ opacity: 0.5 }}>
                <Typography fontSize={15}>Pioggia</Typography>
                <Typography fontSize={20}>{day.precipitazioni[j]}%</Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      );
      hourlyWeather.push(tmp);
    });
  });

  return { dailyWeather, hourlyWeather, selected };
};
