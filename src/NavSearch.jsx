import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

export default function NavSearch() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} cart={cart} />
      <Home search={search} setSearch={setSearch} cart={cart} setCart={setCart} />
    </div>
  );
}
