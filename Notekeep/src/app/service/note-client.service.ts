import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NoteClientService {

  constructor() {
  }
}

export interface Note {
  id: number;
  description: string;
  color: any;
}

