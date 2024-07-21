import { useState } from "react"
import {useForm} from "../../hooks/useForm"
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";

export const Crear = () => {

  const [resultado, setResultado] = useState("no_enviado");
  const {formulario, enviado, cambiado} = useForm({});

  const guardarManga = async(e) => {
    e.preventDefault();
    
    // Recogemos datos del formulario
    let nuevoArticulo = formulario;
    
    //Guardamos el manga en el backend
    const {datos, cargando} = await Peticion(Global.url+"crear", "POST", nuevoArticulo);

    if (datos.status === "success") {
      setResultado("Guardado");
    } else{
      setResultado("no_enviado");
    }
    
    console.log(datos);
  }


  return (
    <div>
        <div className="jumbo">
          <h1>Añadir un manga nuevo</h1>
          <p>Formulario para añadir un manga</p>
          <pre>{JSON.stringify(formulario)}</pre>

          <strong>{resultado == "guardado" ? "Manga guardado" : ""}</strong>
          <strong>{resultado == "error" ? "Datos incorrectos" : ""}</strong>

          <form className="formulario"onSubmit={guardarManga} >
            <div className="form-group">
              <label htmlFor="titulo">Titulo</label>
              <input type="text" name="titulo" onChange={cambiado} />
            </div>

            <div className="form-group">
              <label htmlFor="descripcion">descripcion</label>
              <textarea name="descripcion" onChange={cambiado} />
            </div>

            <div className="form-group">
              <label htmlFor="genero"> Genero</label>
              <input type="text" name="genero" onChange={cambiado} />
            </div>

            <div className="form-group">
              <label htmlFor="file0"></label>
              <input type="file" name="file0" id="file" />
            </div>

            <input type="submit" value="Guardar" className="btn btn-success" />
          </form>
        </div>
    </div>  )
}
