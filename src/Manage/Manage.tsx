import React from "react";
import { Fragment } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { BookItem } from "./components/BookItem";
import { DataTable } from "./components/DataTable";
import firebase from "firebase";

interface IBook {
  title: string;
  author: string[];
  cover: string;
  id: number;
  available: boolean;
}
interface IState {
  books: IBook[];
}

export class Manage extends React.Component {
  state: IState = {
    books: [],
  }
  componentDidMount() {
    const db = firebase.firestore();
    const booksDb = db.collection("books");
    booksDb.get()
      .then((querySnapshot) =>
      {const arr: firebase.firestore.DocumentData[] = [];
      querySnapshot.forEach(function(doc) {
        arr.push(doc.data());
      }); 
        this.setState({
          books: arr,
        })});
  }

  render() {
    const { books } = this.state;
    console.log(books);
    return (
      <Fragment>
        <SearchBar />
        <DataTable>
          {books.length
            ? books.map((book) => (
              <BookItem
                key={book.id}
                cover={book.cover}
                title={book.title}
                author={book.author}
                available={book.available}
              />
            ))
            : "loading..."}
        </DataTable>
      </Fragment>
    );
  }
}
