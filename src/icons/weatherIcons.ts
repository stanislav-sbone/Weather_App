import {
  Cloud,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Cloudy,
  Sun,
  Wind,
} from 'lucide-react';
import type { FC } from 'react';

export const weatherIcons: Record<string, FC<{ className?: string }>> = {
  ясно: Sun,
  'переменная облачность': Cloud,
  'облачно с прояснениями': CloudSun,
  'небольшой дождь': CloudRain,
  пасмурно: Cloudy,
  дождь: CloudRain,
  снег: CloudSnow,
  гроза: CloudLightning,
  ветер: Wind,
};
