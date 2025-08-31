import axios from 'axios';
import type { Units, WeatherData } from './types';
import { API_KEY, BASE_URL } from './constants';

export async function fetchCurrentWeatherByCity(
  city: string,
  units: Units = 'metric',
  lang: string = 'ru'
): Promise<WeatherData | null> {
  const url = new URL(`${BASE_URL}/data/2.5/weather`);
  url.searchParams.set('q', city);
  url.searchParams.set('appid', API_KEY);
  url.searchParams.set('units', units);
  url.searchParams.set('lang', lang);

  try {
    const { data } = await axios.get(url.toString());

    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    };

    const date = now.toLocaleDateString(lang, options);
    const time = now.toLocaleTimeString(lang, {
      hour: '2-digit',
      minute: '2-digit',
    });

    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(lang, {
      hour: '2-digit',
      minute: '2-digit',
    });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(lang, {
      hour: '2-digit',
      minute: '2-digit',
    });

    return {
      city: data.name,
      country: data.sys.country,
      date,
      time,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      weather: data.weather[0].description,
      visibility: data.visibility / 1000,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      sunrise,
      sunset,
    };
  } catch (error) {
    console.error('Ошибка при получении погоды:', error);
    return null;
  }
}
