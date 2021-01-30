import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import { authState } from "rxfire/auth";
import { collectionData, docData } from "rxfire/firestore";
import { } from "firebase/functions";
import {  refCount, shareReplay, publishReplay, switchMap } from "rxjs/operators";
import { of } from "rxjs";

const firebaseConfig = {
    apiKey: "AIzaSyDDJ0nDDnh8Cg1_8ZkLxGwcTURUz_fyI6s",
    authDomain: "gdmain-4ee33.firebaseapp.com",
    projectId: "gdmain-4ee33",
    storageBucket: "gdmain-4ee33.appspot.com",
    messagingSenderId: "615923323653",
    appId: "1:615923323653:web:ccebbb35bac7563e659d6c",
    measurementId: "G-TPZXFK8258"
  };




firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const fireAuthState = authState(auth).pipe(
  shareReplay(1)
);

export const emailPasswordProvider = firebase.auth.EmailAuthProvider



export const firebaseFunctions = firebase.functions();

//get product from databse
export const getHeaderFromFirebase = () => {
  const ref = db.collection('templates/DykixUdfQFc4TJJPoto2/header');
  return collectionData(ref, "id");
};

