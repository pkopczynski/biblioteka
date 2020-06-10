import { addBook } from "../actions"
import { Collection } from "../constants/dbSpaces"
import { IBook } from "../Manage/ManageComponent"
import { connect } from "react-redux"
import { NavbarComponent } from "./NavbarComponent"

const mapDispatchToProps = (dispatch: any) => ({
    addBook: (element: IBook) => dispatch(addBook(Collection.books, element)),
})

export const Navbar = connect(null, mapDispatchToProps)(NavbarComponent)