import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PogodynkaKlientService {

  constructor(private http: HttpClient) {
  }

  getWeatherForCity(cityName: string): Observable<WeatherResponse> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('q', cityName);
    httpParams = httpParams.set('appid', '06b2f6045f424d1e6f4afd35c330a302');
    return this.http.get<WeatherResponse>('http://api.openweathermap.org/data/2.5/weather?' + httpParams.toString());
  }
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
}

export interface WeatherResponse {
  weather: Weather[];
  main: Main;
};
