import firebase from "firebase";

export async function fetchData() {
    const db = firebase.firestore();
    const booksDb = db.collection("books");
    let data: firebase.firestore.DocumentData[] = [];
    await booksDb.get()
        .then((querySnapshot) => {
            const arr: firebase.firestore.DocumentData[] = [];
            querySnapshot.forEach(function (doc) {
                arr.push(doc.data());
            });
            data = arr;
        });
    return data;
}