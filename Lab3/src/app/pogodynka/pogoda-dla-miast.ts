import {RootObject} from "./pogoda";

export class PogodaDlaMiast {
//klasa ktora zapisuje dane lokalikazcje glownie cityName ktore jest zmienne

  constructor(nazwaMiasta: string, weatherResponse: RootObject) {
    this.nazwaMiasta = nazwaMiasta;
    this.RootObject = weatherResponse;
  }

  nazwaMiasta: string;
  RootObject: RootObject;

}
