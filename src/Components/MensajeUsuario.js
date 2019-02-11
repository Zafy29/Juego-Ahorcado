import React from "react";

const MensajeUsuario = props => {
  // //mensaje para indicar al usuario
  switch (props.msg) {
    //al fallar intento
    case "error":
      return (
        <div className="alert alert-danger">
          <b>¡Letra incorrecta!</b>
          Intentos restantes: {props.intentosFallidos}
        </div>
      );
    //completar palabra
    case "completado":
      return <div className="alert alert-success">¡Completado!</div>;
    //letra ingresada repetida
    case "repite":
      return (
        <div className="alert alert-warning">¡Ya esa letra fue ingresada!</div>
      );
    //por defecto.
    default:
      return <div className="alert alert-info">Ingrese una letra.</div>;
  }
};
export default MensajeUsuario;
