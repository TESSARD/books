import React from "react";
import {
  BrowserRouter,
  
  Route,
  Routes,
  
  
} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AddBooks from "./containers/AddBooks";
import SearchBooks from "./containers/SearchBooks";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<AddBooks/>}/>
        <Route  path="/search" element={<SearchBooks/>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
