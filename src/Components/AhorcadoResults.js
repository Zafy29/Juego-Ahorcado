import React from "react";
import AhorcadoImagen from "./AhorcadoImagen";

const Ahorcado_Results = (props) => {
 
  switch(props.resultado){
    case "gana":
    return(
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <h2 className="card-header">¡Te salvaste!</h2>
            <div className="card-body">
              <AhorcadoImagen num="gana" />
              <h4 className="card-title mt-2"> ¡Felicidades!</h4>
              <h5>Tu puntaje final: {props.score}</h5>
              <div className="form-inline justify-content-center">
                <div>
                  <p>
                    Lo lograste. 
                    Haz completado el juego, supongo que
                    no tenias nada mejor que hacer.
                    Asi que... ¡Gracias por jugar!
                  </p>
                  <b>
                    Creado por: Anabel Paz
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );

    case "pierde":
    return( 
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <h2 className="card-header">¡Te ahorcaron!</h2>
            <div className="card-body">
              <AhorcadoImagen num="pierde" />
              <h4 className="card-title mt-2"> ¡Perdiste!</h4>
              <h5>Tu puntaje final: {props.score}</h5>
              <div className="form-inline justify-content-center">
                <button
                  onClick={props.reiniciarJuego} //wait
                  className="btn btn-primary m-1"
                  id="btnGenerar">
                  Reiniciar
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
  
  default:
  
  }
}
  export default Ahorcado_Results;