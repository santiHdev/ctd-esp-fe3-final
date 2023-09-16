import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useGlobalContext } from "./Context/Context";

function App() {

  const {state} = useGlobalContext()

  return (
      <div className={state.theme}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favs' element={<Favs />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
