export type Units = 'metric' | 'imperial';

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

export interface DailyForecast {
  date: string;
  dayOfWeek: string;
  tempMin: number;
  tempMax: number;
  weather: string;
}

export interface CitySuggestion {
  name: string;
  state?: string;
  country?: string;
}
