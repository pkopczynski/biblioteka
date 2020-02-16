import React from "react";
import { Fragment } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { BookItem } from "./components/BookItem";
import { DataTable } from "./components/DataTable";

export function Manage() {
  const mockBookDB = [
    {
      id: 1,
      title: "Bestiariusz Słowiański",
      author: ["Paweł Zych", "Witold Vargas"],
      cover: "https://image.ceneostatic.pl/data/products/47857023/i-bestiariusz-slowianski-czyli-o-nieznanych-biziach-kadukach-i-samojadkach-czesc-2.jpg",
      available: true
    }
  ];
  return (
    <Fragment>
      <SearchBar />
      <DataTable>
        {mockBookDB.map(book => (
          <BookItem
            key={book.id}
            cover={book.cover}
            title={book.title}
            author={book.author}
            available={book.available}
          />
        ))}
      </DataTable>
    </Fragment>
  );
}
