import "./App.css";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./component/Pages/Home";
import { About } from "./component/Pages/About";
import { Products } from "./component/Pages/Products";
import { Contact } from "./component/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <small style={{fontSize: '10px', textAlign: 'center'}}>&copy; 2023 Virjo Healthcare Pvt Ltd. All Rights Reserved.</small>
        </div>
      </Router>
      
  </>
  );
}

export default App;
