import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Creation from "./pages/Creation";
import Persona from "./pages/Persona";
import Pokecolor from "./pages/Pokecolor";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="/persona" element={<Persona />} />
        <Route path="/pokecolor" element={<Pokecolor />} />
      </Routes>
    </>
  );
}

export default App;
