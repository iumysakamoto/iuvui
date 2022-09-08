import React from "react";
import style from "./CardHeader.module.scss";


function CardHeader(props) {
  return (
    <>
      <div className={style.iuHomeHeader}> 
        <div className="dv-line dv-center">
          <div className="dv-column dv-padding-left-hdpi dv-padding-right-hdpi">
            <div className={style.iuHomeBg}>
              <h1>{props.titlle}</h1>
              <h6>{props.description}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHeader;
