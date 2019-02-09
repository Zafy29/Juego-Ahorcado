import React from "react";
import inicio from "./imgs/ahorcado_game/0.png";
import primer from "./imgs/ahorcado_game/1.png";
import segundo from "./imgs/ahorcado_game/2.png";
import fin from "./imgs/ahorcado_game/3.png";
import gana from "./imgs/ahorcado_game/4.png";

const AhorcadoImagen = props => {
  switch (props.num) {
    case 2:
      return (
        <div>
          <img src={primer} alt="fallo 1" />
        </div>
      );

    case 1:
      return (
        <div>
          <img src={segundo} alt="fallo 2" />
        </div>
      );

    case "pierde":
      return (
        <div>
          <img src={fin} alt="pierde" />
        </div>
      );
    case "gana":
      return (
        <div>
          <img src={gana} alt="ganador" />
        </div>
      );

    default:
      return (
        <div>
          <img src={inicio} alt="inicio" />
        </div>
      );
  }
};
export default AhorcadoImagen;
