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
