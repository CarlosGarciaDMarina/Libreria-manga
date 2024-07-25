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
    const {datos} = await Peticion(Global.url+"crear", "POST", nuevoArticulo);
    console.log(datos);

    const fileInput = document.querySelector('#file');

    if (datos.status === "success" && fileInput.files[0]) {
      setResultado("Guardado");

      // Conseguimos el FileInput

      const formData = new FormData();
      formData.append("file", fileInput.files[0]);
      //formData.set("file", fileInput.files[0], fileInput.files[0].name);

      const imagen = await Peticion(Global.url+"subir-imagen/"+datos.manga._id, "POST", formData, true);

      console.log(imagen.datos);

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

          <strong>{resultado == "Guardado" ? "Manga guardado" : ""}</strong>
          <strong>{resultado == "no_enviado" ? "Datos incorrectos" : ""}</strong>

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
              <label htmlFor="file"></label>
              <input type="file" name="file" id="file" />
            </div>

            <input type="submit" value="Guardar" className="btn btn-success" />
          </form>
        </div>
    </div>  )
}
