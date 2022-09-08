import React from "react";
import CardHeader from "../../components/CardHeader";
import PokecolorCard from "../../components/PokecolorCard";

function App() {
  return (
    <>
       <CardHeader titlle="Pokecolor" description="Choose your pokecolor" />
       <div className="dv-line dv-center dv-padding-mdpi">
        <PokecolorCard color="#00ba46" pokecolor="#1 Bulbasaur" />
        <PokecolorCard color="#f89302" pokecolor="#2 Charmander" />
        <PokecolorCard color="#009cff" pokecolor="#3 Squirtle" />
        <PokecolorCard color="#8BD674" pokecolor="#4 caterpie" />
        <PokecolorCard color="#7444fe" pokecolor="#5 butterfree" />
      </div>
    </>
  );
}

export default App;
