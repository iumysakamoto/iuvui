import React from "react";
import { Link } from "react-router-dom";
import style from "./PersonaCard.module.scss";

function PersonaCard(props) {
  return (
    <>
      <div className="dv-column-three dv-padding-mdpi">
        <div className={style.PersonaCard}>
          <ul className="dv-vertical-align-center">
            <li>
              <p>foto</p>
            </li>
            <li>
              <p className={style.NameUser}>Persona</p>
              <p className={style.DescriptionUser}>Empresário, 29 years old</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PersonaCard;
