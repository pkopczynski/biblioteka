import firebase from "firebase";
import { IBook } from "../Manage/ManageComponent";
import { firebaseConfig } from "../Firestore";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export function addElement(space: string, element: IBook) {
    const itemId = Date.now().toString();
    const elementWithId = {...element, id: itemId}
    db.collection(space).doc(itemId).set(elementWithId);
}

export function removeElement(space: string, elementId: string) {
    return db.collection(space).doc(elementId?.toString()).delete()
}