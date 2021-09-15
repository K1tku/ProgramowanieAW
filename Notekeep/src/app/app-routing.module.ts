import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note-component/add-note.component';
import { NotesComponent } from './notes-component/notes.component';

const routes: Routes = [
  {path: '', component: NotesComponent},
  {path: 'addnote', component: AddNoteComponent},
  {path: 'notes', component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
