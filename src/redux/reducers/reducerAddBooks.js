import { v4 as uuiv4 } from "uuid";
import { ADD_BOOKS, DEL_BOOK, DEL_BOOKS } from "./constants";


const initialState = {
    books:[]

}


const helperAddData=action=>{
    return{
        id:uuiv4(),
        title:action.payload.title,
        author:action.payload.author
    }

}
const delDataBook=(state, id)=>{
    const books = state.filter(book=> book.id !==id)  //La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
    return books
}


export const reducerAddBooks =(state = initialState.books, action) => {
    if (localStorage.getItem("booksData")) {
        state=JSON.parse(localStorage.getItem("booksData"))
        
    }
  switch (action.type) {

  case ADD_BOOKS:
    state=[...state, helperAddData(action)]
    localStorage.setItem("booksData", JSON.stringify(state))
    return state

  case DEL_BOOK:
    state = delDataBook(state, action.payload)
    localStorage.setItem("booksData", JSON.stringify(state))
    return state

  case DEL_BOOKS:
    state = []
    localStorage.setItem("booksData", JSON.stringify(state))
    return state

  default:return state
  }
}
