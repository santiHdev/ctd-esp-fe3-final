import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
           {/*  <Route path='/dentist/:id' element={<Dentist />} /> */}
            <Route path='/favs' element={<Favs />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
