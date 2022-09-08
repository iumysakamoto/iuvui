import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.Nav}>
      <div className="dv-line">
        <div className="dv-column-four dv-vertical-align-center dv-horizontal-align-left">
          <div className="dv-padding-mdpi dv-padding-left-hdpi dv-padding-right-hdpi">
            <Link to="/">
              <h4>iuvui</h4>
            </Link>
          </div>
        </div>
        <div className="dv-column dv-vertical-align-center dv-horizontal-align-center">
          <div className="dv-padding-mdpi dv-padding-left-hdpi dv-padding-right-hdpi dv-screen ">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/inspiration">Inspiration</Link>
              </li>
              <li>
                <Link to="/creation">Creation</Link>
              </li>
              <li>
                <Link to="/persona">Persona</Link>
              </li>
              <li>
                <Link to="/pokecolor">Pokecolor</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dv-column-four dv-vertical-align-center dv-horizontal-align-right"></div>
      </div>
    </nav>
  );
};

export default NavBar;
