import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export class TheNotes {
  title: string ;
  description: string ;
  color: string;
}

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})

export class AddNoteComponent implements OnInit {
  titleModel: string;
  descriptionModel: string;
  colorModel: string;
  thenotes: TheNotes[];

  constructor() {
    this.titleModel = '';
    this.descriptionModel = '';
    this.colorModel = '';

    const defaultTheNotes: TheNotes = {
      title: 'Testwy Tytuł',
      description: 'To jest testowa netatka',
      color: 'Czerwony'
    };
    this.thenotes = [ defaultTheNotes ];
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createTheNotes() {

    const newTheNotes: TheNotes = {
      title: this.titleModel ,
      description : this.descriptionModel ,
      color : this.colorModel
    };

    this.thenotes.push( newTheNotes );

    // set the model values to '' again
    this.titleModel = this.descriptionModel = this.colorModel = '';
  }
}
