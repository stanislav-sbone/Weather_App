/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import axios from 'axios';
import type { DailyForecast, Units, WeatherData } from './types';
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

    const timezoneOffset = data.timezone;
    const localDate = new Date((data.dt + timezoneOffset) * 1000);

    const date = localDate.toLocaleDateString(lang, {
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    });
    const time = localDate.toLocaleTimeString(lang, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    });

    const sunriseTime = new Date((data.sys.sunrise + timezoneOffset) * 1000);
    const sunsetTime = new Date((data.sys.sunset + timezoneOffset) * 1000);

    const sunrise = sunriseTime.toLocaleTimeString(lang, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    });
    const sunset = sunsetTime.toLocaleTimeString(lang, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
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

export async function fetchWeeklyForecastByCity(
  city: string,
  units: Units = 'metric',
  lang: string = 'ru'
): Promise<DailyForecast[] | null> {
  try {
    const { data } = await axios.get(`${BASE_URL}/data/2.5/forecast`, {
      params: { q: city, appid: API_KEY, units, lang },
    });

    const timezone = data.city.timezone as number;
    const dailyMap = new Map<string, any[]>();

    const toCityDate = (unixUtcSec: number) =>
      new Date((unixUtcSec + timezone) * 1000);

    const makeDateKey = (d: Date) => {
      const y = d.getUTCFullYear();
      const m = String(d.getUTCMonth() + 1).padStart(2, '0');
      const da = String(d.getUTCDate()).padStart(2, '0');
      return `${y}-${m}-${da}`;
    };

    for (const item of data.list as any[]) {
      const cityDate = toCityDate(item.dt);
      const key = makeDateKey(cityDate);
      if (!dailyMap.has(key)) dailyMap.set(key, []);
      dailyMap.get(key)!.push(item);
    }

    const sortedDays = [...dailyMap.entries()].sort((a, b) =>
      a[0].localeCompare(b[0])
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const dailyForecasts: DailyForecast[] = sortedDays.map(([_, items]) => {
      const temps = items.map((i) => i.main.temp);
      const tempMin = Math.round(Math.min(...temps));
      const tempMax = Math.round(Math.max(...temps));

      const weatherCounts: Record<string, number> = {};
      for (const i of items) {
        const desc = i.weather[0].description as string;
        weatherCounts[desc] = (weatherCounts[desc] || 0) + 1;
      }
      const weather = Object.entries(weatherCounts).sort(
        (a, b) => b[1] - a[1]
      )[0][0];

      const firstCityDate = toCityDate(items[0].dt);

      const dayOfWeek = firstCityDate.toLocaleDateString(lang, {
        weekday: 'long',
        timeZone: 'UTC',
      });
      const date = firstCityDate.toLocaleDateString(lang, {
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      });

      return { date, dayOfWeek, tempMin, tempMax, weather };
    });

    return dailyForecasts.length === 5
      ? dailyForecasts
      : dailyForecasts.slice(1, 6);
  } catch (error) {
    console.error('Ошибка при получении прогноза:', error);
    return null;
  }
}
