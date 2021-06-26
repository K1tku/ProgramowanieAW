import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pogoda {

  constructor(private http: HttpClient) {
  }

  pogodaDlaMiasta(nazwaMiasta: string): Observable<RootObject> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('q', nazwaMiasta);
    httpParams = httpParams.set('appid', '06b2f6045f424d1e6f4afd35c330a302');
    return this.http.get<RootObject>('http://api.openweathermap.org/data/2.5/weather?' + httpParams.toString());
  }
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface RootObject {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}


