import "./App.css";
import Database from "../src/db/Database.jsx";
import Header from "./companents/Header.jsx";
import Conteiner from "./container/Container.jsx";
import { Routes, Route } from "react-router";
import About from "./companents/About.jsx";
import Contact from "./companents/Contact.jsx";
import Notfound from "./companents/Notfound.jsx";
import Footerr from "./companents/Footerr.jsx";
import Produckt from "./companents/Produckt.jsx";
function App() {
  return (
    <div>
      <Conteiner>
        <Header />
        <Routes>
          <Route path="/" element={<Database />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/produkt/:id" element={<Produckt />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footerr />
      </Conteiner>
    </div>
  );
}

export default App;
