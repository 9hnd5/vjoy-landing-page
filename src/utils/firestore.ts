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
  apiKey: "AIzaSyCUniImLaPkcurFGJPiSfdVorwaph2WRp8",
  authDomain: "vus-vjoy.firebaseapp.com",
  projectId: "vus-vjoy",
  storageBucket: "vus-vjoy.appspot.com",
  messagingSenderId: "101647183745",
  appId: "1:101647183745:web:9f05f840ceffdaa621c280",
  measurementId: "G-QVY7XM5V8H",
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

type CollectionName = "users" | "faq" | "feedback";

export async function addData(colllectionName: CollectionName, data: any) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(collection(db, colllectionName), data);
  } catch (e) {}

  return { result, error };
}

export async function getDouments(colllectionName: CollectionName) {
  let result = null;
  let error = null;

  try {
    result = await getDocs(collection(db, colllectionName));
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getDoument(
  collectionName: CollectionName,
  docId: string
) {
  let docRef = doc(db, collectionName, docId);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
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
  let docRef = doc(db, collectionName, docId);

  let result = null;
  let error = null;

  try {
    result = await updateDoc(docRef, data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
