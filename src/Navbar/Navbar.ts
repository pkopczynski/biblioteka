import { addBook, createUser, logInUser, logOutUser } from "../actions"
import { Collection } from "../constants/dbSpaces"
import { IBook } from "../Manage/ManageComponent"
import { connect } from "react-redux"
import { NavbarComponent } from "./NavbarComponent"

const mapDispatchToProps = (dispatch: any) => ({
    addBook: (element: IBook) => dispatch(addBook(Collection.books, element)),
    createUser: (email: string, password: string) => dispatch(createUser(email, password)),
    logInUser: (email: string, password: string) => dispatch(logInUser(email, password)),
    logOutUser: () => dispatch(logOutUser()),
})

export const Navbar = connect(null, mapDispatchToProps)(NavbarComponent)