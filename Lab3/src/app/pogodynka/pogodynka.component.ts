import {Component, OnDestroy, OnInit} from '@angular/core';
import {PogodynkaKlientService, WeatherResponse} from '../service/pogodynka-klient.service';
import {PogodaDlaMiast} from "./pogoda-dla-miast";

@Component({
  selector: 'lab3',
  templateUrl: './pogodynka.component.html',
  styleUrls: ['./pogodynka.component.css']
})
export class PogodynkaComponent implements OnDestroy, OnInit {

  cityName: string;
  weathers: PogodaDlaMiast[];

  constructor(private weatherClientService: PogodynkaKlientService) {
    this.cityName = '';
    const item = localStorage.getItem('weathers');
    //
    this.weathers = item === null ? [] : JSON.parse(item);
  }

  checkWeather(): void {
    this.weatherClientService.getWeatherForCity(this.cityName)
      .subscribe((response) => {
        this.weathers.push(new PogodaDlaMiast( this.cityName,response));
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
