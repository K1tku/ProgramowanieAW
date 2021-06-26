import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherClientService, WeatherResponse} from '../service/pogodynka-client.service';
import {WeatherForCity} from "./pogodynka-for-city";

@Component({
  selector: 'app-lab3',
  templateUrl: './pogodynka.component.html',
  styleUrls: ['./pogodynka.component.css']
})
export class WeatherComponent implements OnDestroy, OnInit {

  cityName: string;
  weathers: WeatherForCity[];

  constructor(private weatherClientService: WeatherClientService) {
    this.cityName = '';
    const item = localStorage.getItem('weathers');
    //
    this.weathers = item === null ? [] : JSON.parse(item);
  }
  clearLS(): void{
    window.onbeforeunload =() => localStorage.clear();
    window.onbeforeunload =() =>localStorage.removeItem('weathers');
    document.location.reload(true)

  }
  checkWeather(): void {
    this.weatherClientService.getWeatherForCity(this.cityName)
      .subscribe((response) => {
        this.weathers.push(new WeatherForCity( this.cityName,response));

      });
  }
  //[aktywuje sie gdy przechodzi sie miedzy Route'mi] Zapisuje do localstorage
  ngOnDestroy(): void {
    localStorage.setItem('weathers', JSON.stringify(this.weathers));
  }

  ngOnInit(): void {
    // zanim dojdzie do przeladowania strony, wykona ngondestroy
    window.onbeforeunload = () => this.ngOnDestroy();
  }
}
