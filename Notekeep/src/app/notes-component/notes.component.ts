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


    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;

    const defaultTheNotes: TheNotes = {
      id: 1,
      date: dateTime,
      title: 'Testowy Tytuł',
      description: 'Testowy Opis',
      color: 'Czerwony'
    };
    this.thenotes = [ defaultTheNotes ];
    const ssss = JSON.parse(localStorage.getItem('thenotes'));
    this.thenotes = ssss;
//pobiera wszystkie noratki z ls :thnotes"
/*        const getNotes: any = JSON.parse(localStorage.getItem('thenotes'));
        if (getNotes !== null) {
          this.thenotes.push(...getNotes);


        } else {

          localStorage.setItem('thenotes', JSON.stringify([]));
          window.location.reload();
        }*/
  }



  deleteNote(parametr): void{

    const thenotes = JSON.parse(localStorage.getItem('thenotes'));
    const filtered = thenotes.filter(item => item.id !== parametr);
    localStorage.setItem('thenotes', JSON.stringify(filtered));
    JSON.parse(window.localStorage.getItem('thenotes'));
    const filterednotes = JSON.parse(localStorage.getItem('thenotes'));
    this.thenotes = filterednotes;

  }



  //
  createTheNotes() {
    const theId: any = this.thenotes.length + 1;
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    const newTheNotes: TheNotes = {
      id: theId,
      date: dateTime,
      title: this.titleModel ,
      description : this.descriptionModel ,
      color : this.colorModel
    };

    this.thenotes.push( newTheNotes );
    this.titleModel = this.descriptionModel = this.colorModel = '';
    document.location.reload(true);



  }


  editNote(id): void {

    const editButton = document.getElementById('editButton'+id)
    editButton.setAttribute("hidden","");
    const saveButton = document.getElementById('saveButton'+id)
    saveButton.removeAttribute("hidden");

    var theTitle = document.getElementById('title'+id) as HTMLInputElement;
    theTitle.disabled = false;

    const theDescription = document.getElementById('description'+id) as HTMLInputElement;
    theDescription.disabled = false;

    }

  saveNote(id,etitle,edescription,ecolor):void{

    var theTitle = document.getElementById('title'+id) as HTMLInputElement;

    theTitle.disabled = true;

    const theDescription = document.getElementById('description'+id) as HTMLInputElement;
    theDescription.disabled = true;

    const editButton = document.getElementById('editButton'+id)
    editButton.removeAttribute("hidden");
    const saveButton = document.getElementById('saveButton'+id)
    saveButton.setAttribute("hidden","");

    const notesfromlc = JSON.parse(localStorage.thenotes);
    const selectedNote = document.getElementById(id);
    selectedNote[id].title = etitle
    for (var i = 0; i < notesfromlc.length; i++) {
      if(id === notesfromlc[i].title){
        notesfromlc[i].title = etitle;
        break;  //exit loop since you found the person
      }
    }
    localStorage.setItem("thenotes", JSON.stringify(notesfromlc));  //put the object back

    selectedNote[id].description = edescription

    selectedNote[id].style.backgroundColor = ecolor;




/*    const edited = this.thenotes;
    localStorage.setItem('thenotes', JSON.stringify(edited));
    JSON.parse(localStorage.getItem('thenotes'));
    document.location.reload(true);*/
}
  firebaseStoryge(): void {

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();

    const note = {
      title: "test",
      content:"test"
    };

    addNoteFB(note)

    async function addNoteFB(newTheNotes: any) {

      const res = await db.collection('notes').add(newTheNotes)
    }

    /*async function deleteNoteFB(id: string) {

      const res = await db.collection('notes').doc(id).delete()
    }

    async function updateNoteFB(id: string, note: any) {

      const res = await db.collection('notes').doc(id).update(note)
    }*/
    }




  ngOnDestroy(): void {
    localStorage.setItem('thenotes', JSON.stringify(this.thenotes));

  }
  ngOnInit(): void {
    window.onbeforeunload = () => this.ngOnDestroy();
  }


}
