import { v4 as uuiv4 } from "uuid";
import { ADD_BOOKS_MAN, ADD_BOOKS_GOOG, DEL_BOOK, DEL_BOOKS } from "./constants";


const initialState = {
    books:[]

}


const helperAddDataMan=action=>{
    return{
        id:uuiv4(),
        // id:action.payload.id,
        title:action.payload.title,
        author:action.payload.author
    }

}
const helperAddDataGoog=(state,action)=>{
  // console.log(state.length())
  
  if (state!==null) {
    const books =state.filter(book=> book.id !==action.payload.id)
    // console.log("state.length>0")

    const newBook={
      id:action.payload.id,
      title:action.payload.title,
      author:action.payload.author}
       const newBooks =[...books,newBook] 

      return newBooks
          
      
  } else{
    // console.log("else")

    const book={
      id:action.payload.id,
      title:action.payload.title,
      author:action.payload.author}
      const newBooks =book

      return newBooks
          
      
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

  case ADD_BOOKS_MAN:
    
    state=[...state, helperAddDataMan(action)]
    localStorage.setItem("booksData", JSON.stringify(state))
    return state

  case ADD_BOOKS_GOOG:
    
    console.log(state)
    state=helperAddDataGoog(state, action)
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
