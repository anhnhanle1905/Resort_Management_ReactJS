import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login/index";
import Register from "./views/Register/index";
//import Layout from './components/Layout/Layout';
import Home from "./views/Home/Home";
import Restaurant from "./views/Restaurant";
import Contact from "./views/Contact";
import Hotel from "./views/Hotel";
import Booking from "./views/Booking";
import "../src/fontawasome.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
