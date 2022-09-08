import React from "react";
import { Link } from "react-router-dom";
import style from "./PokecolorCard.module.scss";

function pokecolorCard(props) {
  return (
    <>
      <div className="dv-column-five dv-padding-mdpi">
        <div className={style.PokeCard}>
          {/* <Link to={"/pokecolor/" + data.id}> </Link> */}
          <div className={style.ColorCard} style={{backgroundColor: props.color}}></div>
          <p className="dv-bold">{props.pokecolor}</p>
        </div>
      </div>
    </>
  );
}

export default pokecolorCard;
