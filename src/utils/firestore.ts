import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIRESTORE_APIKEY,
  authDomain: process.env.FIRESTORE_AUTHDOMAIN,
  projectId: process.env.FIRESTORE_PROJECTID,
  storageBucket: process.env.FIRESTORE_STORAGEBUCKET,
  messagingSenderId: process.env.FIRESTORE_MESSAGINGSENDERID,
  appId: process.env.FIRESTORE_APPID,
  measurementId: process.env.FIRESTORE_MEASUREMENTID,
};
const collection_path = process.env.FIRESTORE_PATH;
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

type CollectionName = "users" | "faq" | "feedback" | 'trial';

export async function addDocument(colllectionName: CollectionName, data: any) {
  let result = null;
  let error = null;

  try {
    const docRef = await addDoc(
      collection(db, collection_path + colllectionName),
      data
    );
    result = docRef.id;
  } catch (e) {}

  return { result, error };
}

export async function getDouments(colllectionName: CollectionName) {
  let result = null;
  let error = null;

  try {
    const querySnapshot = await getDocs(
      collection(db, collection_path + colllectionName)
    );
    result = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        data: doc.data(),
      };
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getDoument(
  collectionName: CollectionName,
  docId: string
) {
  let docRef = doc(db, collection_path + collectionName, docId);

  let result = null;
  let error = null;

  try {
    const doc = await getDoc(docRef);
    result = doc.data();
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function updateDoument(
  collectionName: CollectionName,
  docId: string,
  data: any
) {
  let docRef = doc(db, collection_path + collectionName, docId);

  let result = null;
  let error = null;

  try {
    result = await updateDoc(docRef, data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
