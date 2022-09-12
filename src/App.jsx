import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="h-30 w-full p-5">
        <h1 className="text-3xl font-bold pb-10">MY APP</h1>
        <nav className="border-b-2 pb-2 text-xl uppercase">
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
