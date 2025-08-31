export type Units = 'metric' | 'imperial';

export interface GeocodeResult {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface CurrentWeather {
  dt: number;
  name: string;
  sys: { country: string };
  weather: { id: number; main: string; description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: { speed: number };
}

export interface ForecastListItem {
  dt: number;
  main: { temp: number };
  weather: { id: number; description: string; icon: string }[];
  dt_txt: string;
}

export interface ForecastResponse {
  city: { name: string; country: string };
  list: ForecastListItem[];
}

export interface WeatherData {
  city: string;
  country: string;
  date: string;
  time: string;
  temperature: number;
  feelsLike: number;
  weather: string;
  visibility: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
  sunrise: string;
  sunset: string;
}
