import React from "react";
import Button from "../../components/Button";
import CardHeader from "../../components/CardHeader";
import PokecolorCard from "../../components/PokecolorCard";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";
import PersonaCard from "../../components/PersonaCard";

function App() {
  
  return (
    <div className={style.IuHome}>
     <CardHeader titlle="Hello, iuser!" description="I am a generator for your UX/UI project" />
     <div className="dv-line dv-center">
      <div className="dv-column dv-padding-hdpi">
       <h4><span className={style.NumberTittle}>01.</span>Inspirations</h4>
      </div>
      <div className="dv-column dv-padding-hdpi dv-horizontal-align-right">
          <Link to="/inspiration">
            <Button type="button">Inspire</Button>
          </Link>
      </div>
     </div>
     <div className="dv-line dv-center">
      <div className="dv-column dv-padding-left-hdpi dv-padding-right-hdpi dv-padding-bottom-hdpi dv-vertical-align-center dv-horizontal-align-left">
       <h4><span className={style.NumberTittle}>02.</span> Creations</h4>
      </div>
      <div className="dv-column dv-padding-left-hdpi dv-padding-right-hdpi dv-padding-bottom-hdpi dv-horizontal-align-right">
        <Link to="/creation">
          <Button type="button">Create</Button>
        </Link>
      </div>
     </div>
     <div className="dv-line dv-center">
      <div className="dv-column dv-padding-left-hdpi dv-padding-right-hdpi dv-vertical-align-center dv-horizontal-align-left">
       <h4><span className={style.NumberTittle}>03.</span> Personas</h4>
      </div>
      <div className="dv-column dv-padding-left-hdpi dv-padding-right-hdpi dv-horizontal-align-right">
        <Link to="/persona">
          <Button type="button">See more</Button>
        </Link>
      </div>
     </div>
     <div className="dv-line dv-center dv-padding-left-mdpi dv-padding-right-mdpi dv-padding-bottom-mdpi">
      <PersonaCard />
    </div>
     <div className="dv-line dv-center">
      <div className="dv-column dv-padding-left-hdpi dv-padding-right-hdpi dv-vertical-align-center dv-horizontal-align-left">
       <h4><span className={style.NumberTittle}>04.</span> Pokecolors</h4>
      </div>
      <div className="dv-column dv-padding-left-hdpi dv-padding-right-hdpi dv-horizontal-align-right">
        <Link to="/pokecolor">
          <Button type="button">See more</Button>
        </Link>
      </div>
     </div>
     <div className="dv-line dv-center dv-padding-left-mdpi dv-padding-right-mdpi dv-padding-bottom-mdpi">
      <PokecolorCard color="#00ba46" pokecolor="#1 Bulbasaur" />
      <PokecolorCard color="#f89302" pokecolor="#2 Charmander" />
      <PokecolorCard color="#009cff" pokecolor="#3 Squirtle" />
      <PokecolorCard color="#8BD674" pokecolor="#4 caterpie" />
      <PokecolorCard color="#7444fe" pokecolor="#5 butterfree" />
     </div>
    </div>
  );
}

export default App;
