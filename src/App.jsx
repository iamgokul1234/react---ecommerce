import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import NavSearch from "./NavSearch";
import Register from "./Register";
import Contact from "./Contact";

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} cart={cart} />
        <Routes>
          <Route path="/home" element={<NavSearch />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={<Home search={search} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
