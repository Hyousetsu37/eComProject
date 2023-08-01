//Firebase Import
import { initializeApp } from "firebase/app";
//Auth Imports
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
//Firestore(DB) Imports
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

//Firebase/DB Config
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVqqXc5lcnoav-c-9L1RhSNliAOEq_JGE",
  authDomain: "crwn-clothing-db-84ebe.firebaseapp.com",
  projectId: "crwn-clothing-db-84ebe",
  storageBucket: "crwn-clothing-db-84ebe.appspot.com",
  messagingSenderId: "859853678219",
  appId: "1:859853678219:web:4f981249a6c121b65b568e",
};

// Initialize Firebase in general
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

//Auth - Create the provider in this case Google
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//Auth
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//Firestore(DB) - get the DataBase
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

//Firestore(DB) - Function to create the document of a new user in the database from the auth information
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  //Creates a reference to the document
  const userDocRef = doc(db, "users", userAuth.uid);
  //Gets the info from the document referenced before
  const userSnapshot = await getDoc(userDocRef);

  //if the user doesn't exist runs this code
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Writes on the Document with the setDoc function, taking the reference and an object with the info to store
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user: " + error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
