import { configureStore } from '@reduxjs/toolkit';
import { reducerAddBooks } from './reducerAddBooks';

export const store = configureStore({
  reducer: {
    library: reducerAddBooks,
  },
});
