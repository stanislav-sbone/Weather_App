import { useEffect, useState } from 'react';
import type { WeatherData } from '../types';
import { fetchCurrentWeatherByCity } from '../api';

export function useWeather(
  defaultCity: string = 'Moscow',
  units: 'metric' | 'imperial' = 'metric'
) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState<string>(defaultCity);

  useEffect(() => {
    async function loadWeather() {
      try {
        setLoading(true);
        const data = await fetchCurrentWeatherByCity(city, units, 'ru');
        if (!data) {
          setError('Не удалось загрузить данные');
        } else {
          setWeather(data);
          setError(null);
        }
      } catch (error) {
        setError(`Ошибка при запросе: ${error}`);
      } finally {
        setLoading(false);
      }
    }
    loadWeather();
  }, [city, units]);

  return { weather, loading, error, city, updateCity: setCity };
}
