import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";

function App() {
  return (
    <Router>
      <nav>
        <h2>🌿 Paradise Nursery</h2>

        <ul>
          <li>
            <Link
              to="/"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              style={{ color: "white", textDecoration: "none" }}
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
