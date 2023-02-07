import { ADD_BOOKS_MAN, ADD_BOOKS_GOOG, DEL_BOOK, DEL_BOOKS } from "../reducers/constants";

export const addBooksMan=data=>{
    return{

        type:ADD_BOOKS_MAN,
        payload: data /*object*/
    }
}
export const addBooksGoog=data=>{
    return{

        type:ADD_BOOKS_GOOG,
        payload: data /*object*/
    }
}
export const delBook=id=>{
    return{

        type:DEL_BOOK,
        payload: id /*object*/
    }
}
export const delAllBooks=id=>{
    return{

        type:DEL_BOOKS,
    }
}