import MiApi from "./components/MiApi";
//imagen
import imagen from "./assets/img/imagen.png";
//hooks
import { useFormulario } from "./hooks/useFormulario";
import React, { useState } from "react";
//alert
import Swal from "sweetalert2";
//animate
import 'animate.css';

function App() {
  const [nombrePersonaje, setNombrePersonaje] = useState("");

  const [inputs, handleChange, reset] = useFormulario({
    nombre: ""
  });

  const { nombre} = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre);

    //validacion del input
    if (!nombre.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Campo vacio.Verifique y vuelva a intentar",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    setNombrePersonaje(nombre.trim().toLowerCase());
    reset();
  };
  
  return (
    <div className="container-fluid">

      {/* //encabezado */}
      <header className="banner animate__animated animate__rubberBand">
        <img className="img-banner" src={imagen} alt="banner-rick-morty" />
      </header>

      {/* //principal */}
      <main>
        <form onSubmit={handleSubmit} className='formulario animate__animated animate__fadeInRight'>
          <input
            type="text"
            placeholder="Ingrese personaje"
            className="form-control mb-3"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />

          <button
            className="btn border-warning mb-3"
            type="submit"
          >
            Buscar
          </button>

        </form>
      </main> 

      {/* apis */}
      <MiApi nombrePersonaje={nombrePersonaje} />

        {/* //pie de pagina */}
      <footer className="footer animate__animated animate__rubberBand">
        <img className="img-footer mb-2" src={imagen} alt="" />
        <h4>Nairyn Montiel 2022.© Todos Los derechos reservador</h4>
      </footer>

    </div>
  );
}

export default App;
