import firebase from "firebase";
import { v4 as uuid } from 'uuid';
import { IBook } from "../Manage/ManageComponent";
import { firebaseConfig } from "../Firestore";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export function registerUser(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
}

export function loginUser(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function signOutUser() {
    return auth.signOut();
}

export async function fetchData(space: string) {
    const databaseSpace = db.collection(space);
    let data: firebase.firestore.DocumentData[] = [];
    await databaseSpace.get()
        .then((querySnapshot) => {
            const arr: firebase.firestore.DocumentData[] = [];
            querySnapshot.forEach(function (doc) {
                arr.push(doc.data());
            });
            data = arr;
        });
    return data;
}

export function addElement(space: string, element: IBook) {
    const itemId = uuid();
    const elementWithId = {...element, id: itemId}
    return db.collection(space).doc(itemId).set(elementWithId);
}

export function removeElement(space: string, elementId: string) {
    return db.collection(space).doc(elementId).delete()
}