import { createContext, useContext, type ReactNode } from 'react';
import type { DailyForecast, WeatherData } from '../types';
import { useWeather } from '../hooks/useWeather';

interface WeatherContextType {
  weather: WeatherData | null;
  weeklyForecast: DailyForecast[] | null;
  loading: boolean;
  error: string | null;
  city: string;
  updateCity: (city: string) => void;
}

const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const { weather, weeklyForecast, loading, error, city, updateCity } =
    useWeather('Москва');

  return (
    <WeatherContext.Provider
      value={{ weather, weeklyForecast, loading, error, city, updateCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error('useWeatherContext must be used within WeatherProvider');
  return context;
};
