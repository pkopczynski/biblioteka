import React from "react";
import { Fragment, useEffect } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { BookItem } from "./components/BookItem";
import { DataTable } from "./components/DataTable";
import firebase from "firebase";

export function Manage() {
  const db = firebase.firestore();
  const booksDb = db.collection('items').doc('books');
  const books: any[] = [];
  useEffect(() => {
    booksDb.get().then(function (doc) {
        books.push(doc.data());
        console.log('succes!');
    })  
  });
  return (
    <Fragment>
      <SearchBar />
      <DataTable>
        {books ? books.map(book => (
          <BookItem
            key={book.id}
            cover={book.cover}
            title={book.title}
            author={book.author}
            available={book.available}
          />
        )) : 'loading...'}
      </DataTable>
    </Fragment>
  );
}
