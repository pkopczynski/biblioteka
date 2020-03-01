import React from 'react'
import { Bar } from './styled/Bar'
import firebase from '../Firestore'

export function SearchBar() {
    const db = firebase.firestore();
    const addBook = () => {
        db.collection('books').add({
            id: Date.now(),
            title: "Bestiariusz Słowiański",
            author: ["Paweł Zych", "Witold Vargas"],
            cover: "https://image.ceneostatic.pl/data/products/47857023/i-bestiariusz-slowianski-czyli-o-nieznanych-biziach-kadukach-i-samojadkach-czesc-2.jpg",
            available: true
        })
    };
    return (
        <React.Fragment>
            <Bar />
            <button onClick={addBook}>
                dodaj
            </button>
        </React.Fragment>
    );
}