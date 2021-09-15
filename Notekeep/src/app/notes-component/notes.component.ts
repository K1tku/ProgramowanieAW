import {Component, OnDestroy, OnInit} from '@angular/core';
import firebase from "firebase/compat";
import {firebaseConfig} from "./config";
import {addNoteFB} from "./Firebase";
import {deleteNoteFB} from "./Firebase";
import {updateNoteFB} from "./Firebase";


export class TheNotes {
  id: any;
  date: any;
  title: string ;
  description: string ;
  color: string;

}


@Component({
  selector: 'app-notes',
  templateUrl: './notes.compononent.html',
  styleUrls: ['./notes.component.css']

})


export class NotesComponent implements OnDestroy, OnInit {
  titleModel: string;
  descriptionModel: string;
  colorModel: string;
  thenotes: TheNotes[];


  constructor() {
    this.titleModel = 'TestTitle';
    this.descriptionModel = 'TestDesc';
    this.colorModel = 'Red';


    const d = new Date();

    const defaultTheNotes: TheNotes = {
      id: 1,
      date: d,
      title: 'Testowy Tytuł',
      description: 'Testowy Opis',
      color: 'Czerwony'
    };
    this.thenotes = [ defaultTheNotes ];
    const ssss = JSON.parse(localStorage.getItem('thenotes'));
    this.thenotes = ssss;
//pobiera wszystkie noratki z ls :thnotes"
/*    const getNotes: any = JSON.parse(localStorage.getItem('thenotes'));
    if (getNotes !== null) {
      this.thenotes.push(...getNotes);


    } else {

      localStorage.setItem('thenotes', JSON.stringify([]));
      window.location.reload();
    }*/
  }
  clearLS(): void {
    window.onbeforeunload = () => localStorage.clear();
    window.onbeforeunload = () => localStorage.removeItem('thenotes');
    document.location.reload(true);
  }



  deleteNote(parametr): void{

    const thenotes = JSON.parse(localStorage.getItem('thenotes'));
    const filtered = thenotes.filter(item => item.id !== parametr);
    localStorage.setItem('thenotes', JSON.stringify(filtered));
    JSON.parse(window.localStorage.getItem('thenotes'));
    const filterednotes = JSON.parse(localStorage.getItem('thenotes'));
    this.thenotes = filterednotes;

/*    const filterednotes = JSON.parse(localStorage.getItem('thenotes'));
    this.thenotes = filterednotes;*/
/*    let divy = document.querySelectorAll('div');

    for(let i=0;i<divy.length;i++) {
      divy[i].addEventListener('click', function () {
        this.id;
      });
    }
    window.onbeforeunload = () => localStorage.removeItem('id');
    document.location.reload(true);*/

  }



  //
  createTheNotes() {
    const theId = this.thenotes.length + 1;
    const d = new Date();
    const newTheNotes: TheNotes = {
      id: theId,
      date: d,
      title: this.titleModel ,
      description : this.descriptionModel ,
      color : this.colorModel
    };
/*    const ncolor = document.getElementsByClassName('note') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < ncolor.length; i++) {
      ncolor[i].style.backgroundColor = this.colorModel;

    }*/
    this.thenotes.push( newTheNotes );
    this.titleModel = this.descriptionModel = this.colorModel = '';

  }


  editNote(): void {
    const elements = document.getElementsByClassName('noteinput') as HTMLCollectionOf<HTMLElement>;
    for (const el of elements as any) {
      if (el.disabled === true) {
        el.disabled = false;

        for (let i = 0; i < elements.length; i++) {
          elements[i].style.border = '';
        }
      } else {
        el.disabled = true;

        for (let i = 0; i < elements.length; i++) {
          elements[i].style.border = 'none';
        }
      }
    }
  }






  ngOnDestroy(): void {
    localStorage.setItem('thenotes', JSON.stringify(this.thenotes));

  }
  ngOnInit(): void {
    window.onbeforeunload = () => this.ngOnDestroy();
  }


}
