import weatherJson from "weatherData.json";
import sunny from "@/assets/sun.png";
import rainy from "@/assets/rain.png";
import overcast from "@/assets/overcast.png";
import storm from "@/assets/thunder.png";
import cloudy from "@/assets/cloudy.png";
import Image, { StaticImageData } from "next/image";

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

const getImage = (src: StaticImageData, alt: string, width?: number) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 80}
      style={{ marginBlock: 16 }}
    />
  );
};

const getDataFromCode = (code: number, width?: number) => {
  switch (code) {
    case 0:
      return {
        type: "Soleggiato",
        image: getImage(sunny, "Soleggiato", width),
      };
    case 1:
      return {
        type: "Princ. soleggiato",
        image: getImage(cloudy, "Parzialmente nuvoloso", width),
      };
    case 2:
      return {
        type: "Parz. nuvoloso",
        image: getImage(cloudy, "Parzialmente nuvoloso", width),
      };
    case 3:
      return { type: "Nuvoloso", image: getImage(overcast, "Nuvoloso", width) };
    case 4:
      return {
        type: "Pioggerella",
        image: getImage(rainy, "Pioggia", width),
      };
    case 5:
      return {
        type: "Pioggia leggera",
        image: getImage(rainy, "Pioggia", width),
      };
    case 6:
      return {
        type: "Pioggia moderata",
        image: getImage(rainy, "Pioggia", width),
      };
    case 7:
      return { type: "Temporale", image: getImage(storm, "temporale", width) };
    default:
      return {
        type: "Soleggiato",
        image: getImage(sunny, "Soleggiato", width),
      };
  }
};

const useWeather = () => {
  const weather: WeatherData = JSON.parse(JSON.stringify(weatherJson));

  return { weather, getDataFromCode };
};

export default useWeather;
