import axios from "axios";
import { fetchBooksError, fetchBooksLoading, fetchBooksSuccess } from "../actions/actionFetchBooks";
import { FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS } from "./constants";

const initialState = {

        isLoading:false,
        fetchBooks:[],
        error:""
    }




export const reducerFetchedBooks =(state = initialState, action) => {

  switch (action.type) {

  case FETCH_BOOKS_LOADING:
    // console.log("toto")
    return{
        ...state,
        isLoading:true
    } 
  case FETCH_BOOKS_SUCCESS:
    return{
        ...state,
        isLoading:false,
        fetchBooks:action.payload,
        error:""

    } 
  case FETCH_BOOKS_ERROR:
    return{
        ...state,
        isLoading:false,
        fetchBooks:[],
        error:action.payload
    }



  default:return state
  }
}

export const fetchBooks=title=>{
    return dispatch =>{
        dispatch(fetchBooksLoading())

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`)
        .then(res=>{
            // console.log(res)
            const booksItemArray= res.data.items
            // console.log(initialState.isLoading)
            dispatch(fetchBooksSuccess(booksItemArray))

        })
        .catch(err=>{
            dispatch(fetchBooksError(err.message))


        })
    }

}
