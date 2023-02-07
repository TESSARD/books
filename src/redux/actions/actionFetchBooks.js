import { FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS } from "../reducers/constants";



export const fetchBooksLoading=()=>{
    return{

        type:FETCH_BOOKS_LOADING,
    }
}
export const fetchBooksSuccess=data=>{
    return{

        type:FETCH_BOOKS_SUCCESS,
        payload: data 
    }
}
export const fetchBooksError=error=>{
    return{

        type:FETCH_BOOKS_ERROR,
        payload: error 
    }
}
