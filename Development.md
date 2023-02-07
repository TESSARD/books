## Initialisation de l'application
# npm i bootstrap
# npm i uuid
# npm i --save redux
# npm i react-redux
# npm i @reduxjs/toolkit
# npm i -S react-flip-move
# npm i react-router-dom
# npm i axios redux-thunk
# npm i npm i @redux-devtools/extension
dans store 
import { composeWithDevTools } from '@redux-devtools/extension';

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

# npm i react-toastify