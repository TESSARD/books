import { ADD_BOOKS, DEL_BOOK, DEL_BOOKS } from "../reducers/constants";

export const addBooks=data=>{
    return{

        type:ADD_BOOKS,
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