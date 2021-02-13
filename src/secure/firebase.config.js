import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import { authState } from "rxfire/auth";
import { collectionData, docData } from "rxfire/firestore";
import { } from "firebase/functions";
import {  refCount, shareReplay, publishReplay, switchMap } from "rxjs/operators";
import { of } from "rxjs";

// const firebaseConfig = {
//     apiKey: "AIzaSyDDJ0nDDnh8Cg1_8ZkLxGwcTURUz_fyI6s",
//     authDomain: "gdmain-4ee33.firebaseapp.com",
//     projectId: "gdmain-4ee33",
//     storageBucket: "gdmain-4ee33.appspot.com",
//     messagingSenderId: "615923323653",
//     appId: "1:615923323653:web:ccebbb35bac7563e659d6c",
//     measurementId: "G-TPZXFK8258"
//   };


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmbc-iT_0qsOyOSHj-IxG_1zRHB3-Xg3w",
  authDomain: "gdmaintest.firebaseapp.com",
  databaseURL: "https://gdmaintest.firebaseio.com",
  projectId: "gdmaintest",
  storageBucket: "gdmaintest.appspot.com",
  messagingSenderId: "768137224878",
  appId: "1:768137224878:web:011d69a27b07ea694bc33f",
  measurementId: "G-8E7MZTCYG9"
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
export const getProductFromFirebase = () => {
  const ref = db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/product');
  return collectionData(ref, "id");
};

export const getOneProductFromFirebase = (id) => {
  const ref = db.doc(`sites/DykixUdfQFc4TJJPoto2/site1/id2/product/${id}`);
  return docData(ref, "id");
};

export const createProduct = (product) => {
  return  db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/product').add(product)
  // return collectionData(ref, "id");
};

export const editProduct = (id) => {
  return  db.doc(`sites/DykixUdfQFc4TJJPoto2/site1/id2/product/${id}`).set(id, {merge: true})
};

export const subProduct = (id, subproduct) => {
  return  db.doc(`sites/DykixUdfQFc4TJJPoto2/site1/id2/product/${id}`).set(subproduct, {merge: true})
};





export const deleteProduct = (id) => {
  return  db.doc(`sites/DykixUdfQFc4TJJPoto2/site1/id2/product/${id}`).delete()
};

// export const createProduct = (product) => {
//  return db.doc('sites/DykixUdfQFc4TJJPoto2/site1/product').set(product,{merge: true})

// }

export const createBrands = (brands) => {
  return  db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/brands').add(brands)
  // return collectionData(ref, "id");
};

export const getBrands = () => {
  const ref = db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/brands');
  return collectionData(ref, "id");
};

export const deleteBrands = (id) => {
  return  db.doc(`sites/DykixUdfQFc4TJJPoto2/site1/id2/brands/${id}`).delete()
};

export const createCategories = (categories) => {
  return  db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/categories').add(categories)
  // return collectionData(ref, "id");
};

export const getCategories = () => {
  const ref = db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/categories');
  return collectionData(ref, "id");
};

export const deleteCategory = (id) => {
  return  db.doc(`sites/DykixUdfQFc4TJJPoto2/site1/id2/categories/${id}`).delete()
};



export const createGiftCard = (giftCard) => {
  return  db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/giftCard').add(giftCard)
  // return collectionData(ref, "id");
};

export const getGiftcard = () => {
  const ref = db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/giftCard');
  return collectionData(ref, "id");
};

export const deletegiftCard = (id) => {
  return  db.doc(`sites/DykixUdfQFc4TJJPoto2/site1/id2/giftCard/${id}`).delete()
};


export const createDiscount = (discount) => {
  return  db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/discount').add(discount)
  // return collectionData(ref, "id");
};

export const getDiscount = () => {
  const ref = db.collection('sites/DykixUdfQFc4TJJPoto2/site1/id2/discount');
  return collectionData(ref, "id");
};

export const deleteDiscount = (id) => {
  return  db.doc(`sites/DykixUdfQFc4TJJPoto2/site1/id2/discount/${id}`).delete()
};



export const addToimageCollection = (ProductImageCollection) => {
  return db.doc('sites/DykixUdfQFc4TJJPoto2/site1/id2/images').set(ProductImageCollection,{merge: true})
}


