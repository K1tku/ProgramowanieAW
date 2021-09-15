import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pogoda, RootObject} from './pogoda';
import {PogodaDlaMiast} from "./pogoda-dla-miast";

@Component({
  selector: 'lab3',
  templateUrl: './pogodynka.component.html',
  styleUrls: ['./pogodynka.component.css']
})
export class PogodynkaComponent implements OnDestroy, OnInit {
//deklarujesz zmienne
  nazwaMiasta: string;
  miasta: PogodaDlaMiast[];

  //
  constructor(private pogoda: Pogoda) {
    this.nazwaMiasta = '';
    const wMiasta = localStorage.getItem('miasta');
    //
    this.miasta = wMiasta === null ? [] : JSON.parse(wMiasta);
  }
//bierze metode pogoda dla miasta
  zapytaniePogoda(): void {
    this.pogoda.pogodaDlaMiasta(this.nazwaMiasta)
      .subscribe((response) => {
        this.miasta.push(new PogodaDlaMiast( this.nazwaMiasta,response));
      });
  }
 //[aktywuje sie gdy przechodzi sie miedzy Route'mi Zapisuje do localstorage
  ngOnDestroy(): void {
    localStorage.setItem('miasta', JSON.stringify(this.miasta));
  }

  ngOnInit(): void {
    // zanim dojdzie do przeladowania strony, wykona ngondestroy
    window.onbeforeunload = () => this.ngOnDestroy();
  }
  wyczyscLS(): void {
    window.onbeforeunload = () => localStorage.clear();
    window.onbeforeunload = () => localStorage.removeItem('miasta');
    document.location.reload(true)
  }
}
