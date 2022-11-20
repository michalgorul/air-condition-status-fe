export interface Location {
  type: string;
  coordinates: number[];
}

export interface Pollution {
  timestamp: Date;
  aqius: number;
  mainus: string;
  aqicn: number;
  maincn: string;
}

export interface Weather {
  timestamp: Date;
  temperature: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  iconCode: string;
}

export interface Current {
  pollution: Pollution;
  weather: Weather;
}

export interface Data {
  city: string;
  state: string;
  country: string;
  location: Location;
  current: Current;
}

export interface WeatherDataResponse {
  status: string;
  data: Data;
}

export interface ResponseList {
  totalElements: number;
  data: string[];
}

export interface City {
  city: string;
  state: string;
}

export interface CitiesCategorized {
  cities: City[];
  country: string;
}

export interface DailyUnits {
  time?: string;
  weathercode?: string;
  temperature2mMax?: string;
  temperature2mMin?: string;
  apparentTemperatureMax?: string;
  apparentTemperatureMin?: string;
  sunrise?: string;
  sunset?: string;
  precipitationSum?: string;
  rainSum?: string;
  showersSum?: string;
  snowfallSum?: string;
  precipitationHours?: string;
  windspeed10mMax?: string;
  windgusts10mMax?: string;
  winddirection10mDominant?: string;
  shortwaveRadiationSum?: string;
  et0FaoEvapotranspiration?: string;
}

export interface Daily {
  time?: string[];
  weathercode?: number[];
  temperature2mMax?: number[];
  temperature2mMin?: number[];
  apparentTemperatureMax?: number[];
  apparentTemperatureMin?: number[];
  sunrise?: string[];
  sunset?: string[];
  precipitationSum?: number[];
  rainSum?: number[];
  showersSum?: number[];
  snowfallSum?: number[];
  precipitationHours?: number[];
  windspeed10mMax?: number[];
  windgusts10mMax?: number[];
  winddirection10mDominant?: number[];
  shortwaveRadiationSum?: number[];
  et0FaoEvapotranspiration?: number[];
}

export interface ForecastResponse {
  latitude: number;
  longitude: number;
  generationtimeMs: number;
  utcOffsetSeconds: number;
  timezone: string;
  timezoneAbbreviation: string;
  elevation: number;
  dailyUnits: DailyUnits;
  daily: Daily;
}
