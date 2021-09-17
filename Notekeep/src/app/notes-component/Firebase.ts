import firebase from "firebase/compat";
import {firebaseConfig} from "./config";
import {OnDestroy, OnInit} from "@angular/core";


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


  export async function

  addNoteFB(note: any) {

    const res = await db.collection('notes').add(note)
  }

export async function

  deleteNoteFB(id: string) {

    const res = await db.collection('notes').doc(id).delete()
  }

export async function

  updateNoteFB(id: string, note: any) {

    const res = await db.collection('notes').doc(id).update(note)
  }



