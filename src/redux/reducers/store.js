import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { reducerAddBooks } from './reducerAddBooks';
import { reducerFetchedBooks } from './reducerFetchBooks';

const initialState = {};
const middleware = [thunk];

export const store = configureStore({
  reducer: {
    library: reducerAddBooks,
    search: reducerFetchedBooks

  }},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
